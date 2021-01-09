var ENV = require('./env');

module.exports = {
    redis_db : {
        host : "localhost", port: 6379
    },
     mongodb : ENV.get(process.env.NODE_ENV).DB_URL

}