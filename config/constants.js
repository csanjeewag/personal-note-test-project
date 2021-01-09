/**
 *  config/constants.js
 *
 * @description :: constants define here
 *
 */

/** config */
var ENV = require('./env');

// define CONSTANT
var CONSTANT = {};

// set CONSTANT function
CONSTANT.DATA_SENSE_SERVER_URL = ENV.get(process.env.NODE_ENV).DATA_SENSE_SERVER_URL;


// export SECRET
module.exports = CONSTANT;