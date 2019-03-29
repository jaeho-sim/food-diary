import React, { Component, Fragment } from 'react';
import TopBar from '../TopBar';

export class RestaurantsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopBar page="Restaurant list page" />
        <div>Restaurant page</div>
      </Fragment>
    )
  }
}

export default RestaurantsPage;