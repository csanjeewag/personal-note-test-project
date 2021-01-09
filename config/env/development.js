/**
 *  config/env/development.js
 *
 * @description :: development define here
 *
 */

/** define CONFIG */
var CONFIG = {};


/** set CONFIG function */
CONFIG.env                  = 'Development';
CONFIG.PORT                 = 8000;
// CONFIG.DB_URL               = 'mongodb://v3.zepto.io/zeptoDB';
CONFIG.DB_URL               = 'mongodb+srv://dbUser:sanjeewa@12345@cluster0.zemia.mongodb.net/thirdfort?retryWrites=true&w=majority';

/** export CONFIG */
module.exports = CONFIG;