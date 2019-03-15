import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { data: null }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('/api')
      .then(res => {
        console.log(res.status);
        return this.setState({ data: res.status })
      });
  }
  
  render() {
    const { data } = this.state;
    return (
      <div className="App">
       {data ? data : 'no data'}
      </div>
    );
  }
}

export default App;
