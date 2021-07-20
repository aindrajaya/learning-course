pragma solidity >=0.5.12<=0.8.0;

contract Shipping{
  //our predefined values for shipping listed as enums
  enum ShippingStatus{Pending, Shipped, Delivered}

  //save enum ShippingStatus in variable status
  ShippingStatus private status;

  //event to launch when package has arrived
  event LogNewAlert(string description);

  //this initialize our contract state (sets enum to pending on the program starts)
  constructor() public{
    status = ShippingStatus.Pending;
  }

  //function to change to shipped
  function Shipped() public{
    status = ShippingStatus.Shipped;
    emit LogNewAlert("Your package has been shipped");
  }

  //function to change to delivered
  function Delivered() public{
    status = ShippingStatus.Delivered;
    emit LogNewAlert("Your package has arrived");
  }

  //function to get the status of the shipping
  function getStatus(ShippingStatus _status) internal pure returns (string memory){
    //check the current status and return the correct name
    if(ShippingStatus.Pending == _status) return "Pending";
    if(ShippingStatus.Shipped == _status) return "Shipped";
    if(ShippingStatus.Delivered == _status) return "Delivered";
  }

  //get status of your shipped item
  function Status() public view returns (string memory){
    ShippingStatus _status = status;
    return getStatus(_status);
  }
}