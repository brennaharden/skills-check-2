import React, {Component} from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard.js'
import Form from './Components/Form/Form.js'
import Header from './Components/Header/Header.js'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }
  }
  componentDidMount(){
  axios.get('/api/inventory')
    .then(results => {
      this.setState({
        inventory: results.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
      </div>
    );
  }
  
}

export default App
