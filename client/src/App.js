import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TopBar from './components/TopBar';
import RestaurantsPage from './components/RestaurantsPage';
import RestaurantDetail from './components/RestaurantDetail';
import './App.scss';
require('dotenv').config();

class App extends Component {  
  render() {
    return (
      <BrowserRouter>
        <TopBar page="Top Bar" />
        <div className="gj-page">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/restaurants" />} />
            <Route path={"/restaurants/:id"} component={RestaurantDetail} />
            <Route path="/restaurants" component={RestaurantsPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
