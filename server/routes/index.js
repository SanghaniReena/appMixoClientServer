var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/install',function(req,res,next){
    res.send({
      status: 302,
      message: 'there are some error with query'
  })
});
module.exports = router;
