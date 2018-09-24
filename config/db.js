var mysql = exports; exports.constructor = function mysql(){};

var env = process.env.NODE_ENV || 'production';
var config = require('./config')[env];
var db = require('mysql');

/**
 * Initialize SQL Database Connection
 * @param {Callback} callback 
 */
mysql.initialize = function(callback) {
    var con = db.createConnection({
        host: config.database.host,
        user: config.database.user,
        password: config.database.password,
        database: config.database.database
      });
      
      con.connect(function(err) {
        if (err) {
          return callback(err);
        }
        mysql.con = con;
        callback();
      });
};

/**
 * Executes SQL Query
 * @param {String} query 
 * @param {Callback} callback 
 */
mysql.query = function (query, callback) {
  mysql.con.query(query, function(err, res) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
}