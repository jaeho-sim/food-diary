import React, { Component } from 'react';
import './App.css';
require('dotenv').config();

class App extends Component {

  state = { data: null }

  componentDidMount() {
    this.getData(process.env.NODE_ENV);
  }

  getData = (env) => {
    const domain = env === 'development' ? ' http://192.168.0.14:5000' : '';
    fetch(`${domain}/api`)
      .then(res => res.json())
      .then(data => {
        return this.setState({ data })
      });
  }
  
  render() {
    const { data } = this.state;
    return (
      <div className="App">
       {data ? JSON.stringify(data) : 'no data'}
      </div>
    );
  }
}

export default App;
