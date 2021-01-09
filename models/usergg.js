var mongoose = require('mongoose');


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var userSchema = new mongoose.Schema({
    firstName: { type : String, required : true },
    lastName: { type : String },
    email: { type : String , index: true, unique: true, 
        validate : [ validateEmail, "Email address is invalid format"],
        required : true, dropDups: true },
    password: { type : String, required : true, minlength : 6 },
    pwtoken: { type: String },
    pwtokenexpried : { type : Date },
    verifyCode: { type: Number },
    verifyFlag: { type: Boolean },
    verifyCodeExpired: { type : Date },
    packageId   : { type : String },
    signUpStatus : { type: String, required: true, enum: 
        ["NEW_USER","TRAIL_USER","TRAIL_EXPRIRED","PAID_USER","BILLING_FAILED","USER_SUSPENDED"]
    },
    trialExpiredTime : { type : Date },
    onBoardStatus : { type: String, required: true, enum: ["PENDING", "COMPLETED"] }
});


var userModel = mongoose.model('User', userSchema);

module.exports = userModel;