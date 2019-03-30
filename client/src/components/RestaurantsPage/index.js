import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TopBar from '../TopBar';
import RestaurantList from '../RestaurantList';

export class RestaurantsPage extends Component {

  state = { data: null }

  componentWillMount() {
    this.getData(process.env.NODE_ENV);
  }

  getData = (env) => {
    // http://192.168.0.14:5000
    let domain = env === 'development' ? 'http://10.2.37.177:5000' : '';
    console.log(`fetching: ${domain}/api`);
    axios.get(`${domain}/api`)
      .then(res => {
        const { data } = res;
        console.log('data: ', data);
        return this.setState({ data })
      })
      .catch((error) => {
        console.error('error: ', error);  
      });
  }

  renderRestaurantList = (item, index) => {
    const { name, address, pictures, point, id, author } = item;
    const picturesMock = [
      "https://s3-media1.fl.yelpcdn.com/bphoto/1fRssiE9841Zu1iW-sDKlg/348s.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/TiynBExC_GbHYLasGupbsA/348s.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/f1H4vqhlXaBbLSUIkS4bzg/348s.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/i5C7qaeEsDq1vNgxczAT_A/348s.jpg"
    ];
    const addressMock = "address1";
    const pointMock = 4.5;
    const authorMock = "John Doe";

    return <RestaurantList
      pictures={picturesMock}
      name={name}
      address={addressMock}
      point={pointMock}
      id={id}
      author={authorMock}
      key={name}
    />
  }

  render() {
    const { data } = this.state;
    return (
      <Fragment>
        <TopBar page="Restaurant list page" />
        <div className="gj-page-container">
          {data ? data.map(this.renderRestaurantList) : "No data"}
        </div>
      </Fragment>
    )
  }
}

export default RestaurantsPage;