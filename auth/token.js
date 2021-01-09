

const verifyTokenWithCB = function(token, cb){

        const tk=   Number(token);

        if(tk<1000){
            return cb(null, 1)
        }else{
           
            return cb(null, 0)

        }

}



const token = {
    verifyTokenWithCB: verifyTokenWithCB
}

module.exports = token;