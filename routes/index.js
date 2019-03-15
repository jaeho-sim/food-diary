const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(
    [
      {
        name: 'name1'
      },
      {
        name: 'name2'
      }
    ]
  );
});

module.exports = router;
