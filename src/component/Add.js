import React from "react"
import List from "./List";


class Add extends React.Component {
    constructor(){
        super()

        this.state = {
            name: "",
            price: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this) 
        this.handlePriceChange = this.handlePriceChange.bind(this) 
    }

    handleNameChange (e) {
        this.setState({ name : e.target.value })
    }

    handlePriceChange (e) {
        this.setState({ price : e.target.value })
    }

    render () { 
    return (
        <>
        <h1>Add</h1>
        <input type="text" onChange={this.handleNameChange}></input>
        <input type="range" min={1} max={10} onChange={this.handlePriceChange}/>
        <span >{this.state.price}</span>
        <button onClick={() => this.props.addItem(this.state.name, this.state.price)}>Add</button>
        </>
    );
}
}
  
  export default Add;