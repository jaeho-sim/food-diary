const Restaurant = require('../models').Restaurant;

module.exports = {
  create(req, res) {
    return Restaurant
      .create({
        name: req.body.name,
      })
      .then(restaurant => res.status(201).send(restaurant))
      .catch(error => res.status(400).send(error));
  },
};