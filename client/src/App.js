import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { data: [] }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('/api')
      .then(res => res.json())
        .then(data => this.setState({ data }));
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
       {data.map((eachData, index) => 
          <li key={index}>
           {index}. {eachData.name}
          </li>
        )}
      </div>
    );
  }
}

export default App;
