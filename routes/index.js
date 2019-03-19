const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers').restaurants;

// router.get('/', (req, res, next) => {
//   return res.status(200).send({
//     message: 'restaurants get all'
//   })
// });

router.get('/', restaurantsController.list);
router.post('/add', restaurantsController.create);

module.exports = router;
