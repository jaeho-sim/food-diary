import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = (props) => {
  const { name, address, pictures, point, id, author } = props;
  return (
    <div className="gj-restaurant-list">
      <Link to={{
        pathname: `/${id}`
      }}>
        <div className="gj-restaurnt-list-image">
          <img src={pictures[0] ? pictures[0] : ""} alt={name} />
        </div>
        <p>{name}</p>
        <p>{address}</p>
        <p>{point}</p>
        <p>{author}</p>
      </Link>
    </div>
  );
}

export default RestaurantList;