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
    });
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

// menambahkan data
exports.tambahMahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('insert into mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambah data", res)
            }
        });
}