var express = require('express');
var router = express.Router();
var visits = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  visits++;
  res.send('No of visits: '+visits);
});

module.exports = router;
