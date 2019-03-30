import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RestaurantsPage from './components/RestaurantsPage';
import './App.scss';
require('dotenv').config();

class App extends Component {  
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={RestaurantsPage} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
