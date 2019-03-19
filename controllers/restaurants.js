const Restaurant = require('../models').Restaurant;
const Picture = require('../models').Picture;

const messageIfNotFound = (res, restaurant) => {
  if (!restaurant) {
    return res.status(404).send({
      message: 'Restaurant not found'
    });
  }
}

const sendError = (error) => {
  console.log('-- error: ', error);
  return res.status(400).send(error);
}

module.exports = {
  create(req, res) {
    return Restaurant
      .create({
        name: req.body.name,
      })
      .then(restaurant => res.status(201).send(restaurant))
      .catch(error => sendError(error));
  },

  list(req, res) {
    return Restaurant
      .findAll({
        include: [{
          model: Picture,
          as: 'pictures'
        }]
      })
      .then(restaurants => res.status(200).send(restaurants))
      .catch(error => sendError(error));
  },

  get(req, res) {
    return Restaurant
      .findByPk(req.params.restaurantId, {
        include: [{
          model: Picture,
          as: 'pictures'
        }]
      })
      .then(restaurant => {
        messageIfNotFound(res, restaurant);
        return res.status(200).send(restaurant);
      })
      .catch(error => sendError(error));
  },

  update(req, res) {
    return Restaurant
      .findByPk(req.params.restaurantId, {
        include: [{
          model: Picture,
          as: 'pictures'
        }]
      })
      .then(restaurant => {
        messageIfNotFound(res, restaurant);
        return restaurant
          .update({
            name: req.body.name || restaurant.name
          })
          .then(() => res.status(200).send(restaurant))
          .catch(error => sendError(error));
      })
      .catch(error => sendError(error));
  }
};