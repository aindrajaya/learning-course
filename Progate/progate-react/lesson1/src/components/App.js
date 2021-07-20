import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {same: 'Ninja'}
    }
    handleClick(name){
        this.setState({name: name})
    }
    render(){
        return(
            <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={() => this.handleClick('Suhu')}>Suhu</button>
                <button onClick={() => this.handleClick('Ninja')}>Ninja</button>
            </div>
        )
    }
}