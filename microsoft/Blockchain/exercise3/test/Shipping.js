const ShippingStatus = artifacts.require("Shipping");
const truffleAssert = require('truffle-assertions');

contract('Shipping', () => {
  it("harus menampilkan status Pending", async()=>{
    //instance of our deployed contract
    const instance = await ShippingStatus.deployed();
    //checking the initial status in our contract
    const status = await instance.Status();
    //checking if the status is initially Pending as set in the constructor
    assert.equal(status, "Pending");
  });
  it("harus menampilkan status Shipped", async()=> {
    //instnce of our deployed contract
    const instance = await ShippingStatus.deployed();
    //calling the Shipped() function
    await instance.Shipped();
    //checking the initial status in our contract
    const status = await instance.Status();
    //checking if the status is initially Shipped
    assert.equal(status, "Shipped");
  });
  it("harus menampilkans status Delivered", async()=>{
    //instance of our deployed contract
    const instance = await ShippingStatus.deployed();
    //calling the Delivered() function
    await instance.Delivered();
    //checking the initial status in our contract
    const status = await instance.Status();
    //checking if the status is initially Delivered
    assert.equal(status, "Delivered");
  });
  it("harus return deskripsi event", async()=>{
    //instance of our deployed contract
    const instance = await ShippingStatus.deployed();
    //calling the Delivered() function
    const delivered = await instance.Delivered();
    //check event description is correct
    truffleAssert.eventEmitted(delivered, 'LogNewAlert', (event) =>{
      return event.description == 'Your package has arrived';
    });
  });
});
