import React from 'react';
import { Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.scss';

const RestaurantList = (props) => {
  const { name, address, pictures, rating, id, author } = props;
  return (
    <div className="gj-restaurant-list">
      {/* <Link to={{
        pathname: `/${id}`
      }}> */}
      <div className="gj-restaurant-list-image" style={{backgroundImage: `url(${pictures[0]})`}} />
      <div className="gj-restaurant-list-text">
        <div className="name">{name}</div>
        <div className="address">{address}</div>
        <span className="rating">{rating} <Icon className="star-icon">star</Icon></span>
        <div className="author">{author}</div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default RestaurantList;