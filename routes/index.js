const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers').restaurants;
const picturesController = require('../controllers').pictures;

// router.get('/', (req, res, next) => {
//   return res.status(200).send({
//     message: 'restaurants get all'
//   })
// });

router.get('/', restaurantsController.list);
router.get('/:restaurantId', restaurantsController.get);
router.post('/add', restaurantsController.create);
router.put('/:restaurantId', restaurantsController.update);
router.delete('/:restaurantId', restaurantsController.delete);

router.get('/:restaurantId/pictures', picturesController.list);
router.get('/:restaurantId/pictures/:pictureId', picturesController.get);
router.post('/:restaurantId/pictures/add', picturesController.create);
router.put('/:restaurantId/pictures/:pictureId', picturesController.update);
router.delete('/:restaurantId/pictures/:pictureId', picturesController.delete);

module.exports = router;
