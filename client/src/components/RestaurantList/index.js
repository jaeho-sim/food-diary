import React from 'react';
import { Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import './index.scss';

const RestaurantList = (props) => {
  const { name, address, pictures, rating, id, author } = props;
  const images = pictures.map(picture => {
    return {
      original: picture,
      originalClass: 'gj-restaurant-list-image'
    }
  });
  console.log('images: ', images);
  return (
    <div className="gj-restaurant-list">
      {/* <Link to={{
        pathname: `/${id}`
      }}> */}
      {/* <div className="gj-restaurant-list-image" style={{backgroundImage: `url(${pictures[0]})`}} /> */}
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        />
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