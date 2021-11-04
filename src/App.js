import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Button from './component/Button';
import Add from './component/Add';
import Pay from './component/Pay';
import List from './component/List';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      activeTab: "add",
      items: []
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleButtonClick(str) {
    console.log(str)
    this.setState({ activeTab : str })
  }
  
  addItem(name, price){
    const item = { name: name , price: price }
    this.setState({items : [item, ...this.state.items ]})
  }
    
    render () {
        console.log(this.state.items)
      return (
    <div>
      <h1>Bakery</h1>
      <Button
      children="Add"
      handleClick={this.handleButtonClick}
        
      />
      <Button
      children="Pay"
      handleClick={this.handleButtonClick}
      />
      <Button
      children="List"
      handleClick={this.handleButtonClick}
      />
      {this.state.activeTab === "Add" && <Add addItem={this.addItem}/>}
      {this.state.activeTab === "Pay" && <Pay />}
      {this.state.activeTab === "List" && <List />}
    </div>
  );
}
}


export default App;
