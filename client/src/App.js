import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RestaurantsPage from './components/RestaurantsPage';
import TopBar from './components/TopBar';
import './App.scss';
require('dotenv').config();

class App extends Component {  
  render() {
    return (
      <BrowserRouter>
        <TopBar page="Top Bar" />
        <div className="gj-page">
          <Switch>
            <Route exact path="/" component={RestaurantsPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
