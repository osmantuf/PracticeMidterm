var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 3300,
        db: 'mongodb://127.0.0.1/todo',
    },
    production: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 80,
    }
};

module.exports = config[env];