'use-strict';

var response = require('./response');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi rest api ku berjalan")
};