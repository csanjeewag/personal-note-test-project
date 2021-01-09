
var createError = require('http-errors');
var token = require('./token')

var auth = function(req, res, next){

     // check header or url parameters or post parameters for token
     var t = req.body.token || req.query.token || req.headers['x-access-token'];

    
     if (!t) {
     
     
      next();

     }else{
        return res.status(403).json({})
     }
}

module.exports = auth;