import React from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard.js'
import Form from './Components/Form/Form.js'
import Header from './Components/Header/Header.js'
import './reset.css';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inventory: [],
      product: {},
      editing: false,
      button: 'Add Product'
    }

    this.getInventory = this.getInventory.bind(this)
    this.editMode = this.editMode.bind(this)
    this.editReset = this.editReset.bind(this)
  }
  componentDidMount(){
    this.getInventory()
  }

  getInventory = () => {
    axios.get('/api/inventory')
    .then(results => {
      console.log(results.data)
      this.setState({
        inventory: results.data
      })
    })
  }

  editMode = (product) => {
    this.setState({
      editing: true,
      button: 'Save Changes',
      product: product
    })
  }

  editReset = () => {
    this.setState({
      editing: false,
      button: 'Add Product'
    })
  }

  render() {
    return (
      <div className="App">
        <Header className="header"/>
        <div className="main">
        <Dashboard getInventory={this.getInventory} editMode={this.editMode} inventory={this.state.inventory}/>
        <Form getInventory={this.getInventory} 
        inventory={this.state.inventory}
        product={this.state.product}
        editReset={this.editReset}
        editing={this.state.editing}
        button={this.state.button}/>
        </div>
      </div>
    );
  }
  
}

export default App
