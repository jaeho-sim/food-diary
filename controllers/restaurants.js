const Restaurant = require('../models').Restaurant;
const Picture = require('../models').Picture;

module.exports = {
  create(req, res) {
    return Restaurant
      .create({
        name: req.body.name,
      })
      .then(restaurant => res.status(201).send(restaurant))
      .catch(error => res.status(400).send(error));
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
      .catch(error => res.status(400).send(error))
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
        if (!restaurant) {
          return res.status(404).send({
            message: 'Restaurant not found'
          });
        }
        return res.status(200).send(restaurant);
      })
      .catch(error => res.status(400).send(error));
  }
};