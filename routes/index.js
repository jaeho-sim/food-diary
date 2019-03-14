var express = require('express');
var router = express.Router();

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
