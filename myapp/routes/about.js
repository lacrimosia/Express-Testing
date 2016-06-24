var express = require('express');
var router = express.Router();
var name = "Shatilla P";
var sql = 'INSERT INTO names (names) VALUES ("Shatilla Prayer")';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', {"name": name});
});



module.exports = router;
