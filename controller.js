'use strict';

var response = require('./response');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi rest api ku berjalan", res)
};

// menampilkan data mahasiswa
exports.tampilSemuaMahasiswa = function (req, res) {
    connection.query("select * from mahasiswa", function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    })
}

// menampilkan data mahasiswa berdasarkan id
exports.getById = function (req, res) {
    let id = req.params.id;
    connection.query('select * from mahasiswa where id_mahasiswa = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
}