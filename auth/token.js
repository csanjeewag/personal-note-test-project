var jwt = require('jsonwebtoken');




const createToken = function(user, expireTime){
    if(!expireTime){
        expireTime = 60 * 2; // Expire Time 2 minutes 
    }
    var newToken = jwt.sign({ email : user.email, _id : user._id, signUpStatus: user.signUpStatus }, user.password);
    redisClient.set(newToken,user.password,'EX',expireTime);
    return newToken;
}

const removeToken = function(token){
    return redisClient.del(token)
}

/** call back */
const getTokenWithCB = function(token, cb){
    return redisClient.get(token, cb);
}

const verifyTokenWithCB = function(token, cb){
    redisClient.get(token, function(err, key){
        if(err){
            return cb(null, 0)
        }else{
           
            return cb(null, 1)

        }
    })
}

const updateTokenWithCB = function(existToken, user, cb){
    /** TODO : under development */
}

const token = {
    createToken : createToken,
    removeToken : removeToken,
    //decodeToken : decodeToken,
    /** call back */
    getTokenWithCB: getTokenWithCB,
    verifyTokenWithCB: verifyTokenWithCB
}

module.exports = token;