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
  }

  handleButtonClick(str) {
    console.log(str)
    this.setState({ activeTab : str })
  }


    render () {
      
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
    </div>
  );
}
}


export default App;
