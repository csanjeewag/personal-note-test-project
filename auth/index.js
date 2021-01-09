
var token = require('./token')

var auth = function(req, res, next){

     // check header or url parameters or post parameters for token
     var t = req.body.token || req.query.token || req.headers['access-token'];

    
     if (t) {
     
     return token.verifyTokenWithCB(t,function(err,res){

         if(err){
            return res.status(403).json({massage:'there is a error.'});
         }else if(res==0){
            
            return res.status(403).json({massage:'Invalid user id, you are not allow to access'});
         }
         else{
            req.userId = t;
            next();
         }

      })
     
     

     }else{
        return res.status(401).json({massage:'unauthorized user'});
     }
}

module.exports = auth;