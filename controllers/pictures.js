const Picture = require('../models').Picture;

const messageIfNotFound = (res, restaurant) => {
  if (!restaurant) {
    return res.status(404).send({
      message: 'Picture not found'
    });
  }
}

const sendError = (res, error) => {
  console.log('-- error: ', error);
  return res.status(400).send(error);
}

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

  list(req, res) {
    return Picture
      .findAll({
        where: {
          restaurantId: req.params.restaurantId
        }
      })
      .then(pictures => res.status(200).send(pictures))
      .catch(error => sendError(res, error));
  },

  get(req, res) {
    return Picture
      .findByPk(req.params.pictureId, {
        where: {
          restaurantId: req.params.restaurantId
        }
      })
      .then(picture => {
        messageIfNotFound(res, picture);
        return res.status(200).send(picture);
      })
      .catch(error => sendError(res, error));
  },

  update(req, res) {
    return Picture
      .findByPk(req.params.pictureId, {
        where: {
          restaurantId: req.params.restaurantId
        }
      })
      .then(picture => {
        messageIfNotFound(res, picture);
        return picture
          .update({
            title: req.body.title || picture.title,
            url: req.body.url || picture.url
          })
          .then(updatedPicture => res.status(200).send(updatedPicture))
          .catch(error => sendError(res, error));
      })
      .catch(error => sendError(res, error));
  },

  delete(req, res) {
    return Picture
      .findByPk(req.params.pictureId, {
        where: {
          restaurantId: req.params.restaurantId
        }
      })
      .then(picture => {
        messageIfNotFound(res, picture);
        return picture
          .destroy()
          .then(() => res.status(200).send({
            message: 'Delete success'
          }))
          .catch(error => sendError(res, error));
      })
      .catch(error => sendError(res, error));
  }
};