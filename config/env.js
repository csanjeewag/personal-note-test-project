/**
 *  config/env.js
 *
 * @description :: env define here
 *
 */

/** config */
var DEVELOPMENT = require('./env/development'),
    STAGE       = require('./env/stage'),
    PRODUCTION  = require('./env/production');

/** define ENV */
var ENV = {};


/** Set ENV Function */
ENV.development = DEVELOPMENT;
ENV.stage       = STAGE;
ENV.production  = PRODUCTION;
/** export ENV */
exports.get = function get(env) {

    return ENV[env] || ENV.development;
};