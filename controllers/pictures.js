const Picture = require('../models').Picture;

module.exports = {
  create(req, res) {
    return Picture
      .create({
        title: req.body.title,
        url: req.body.url,
        restaurantId: req.params.restaurantId,
      })
      .then(picture => res.status(201).send(picture))
      .catch(error => res.status(400).send(error));
  },
};