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

// mengupdate data 
exports.updateMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa set nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',
        [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah data", res)
            }
        }
    )
}

// menghapus data
exports.deleteMahasiswa = function (req, res) {
    let id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus data", res)
            }
        })
}

// get nested array
exports.tampilGroupMatakuliah = function (req, res) {
    connection.query('select mahasiswa.id_mahasiswa,mahasiswa.nim,mahasiswa.nama,mahasiswa.jurusan,matakuliah.matakuliah,matakuliah.sks from krs join mahasiswa join matakuliah where krs.id_mahasiswa = mahasiswa.id_mahasiswa and krs.id_matakuliah = matakuliah.id_matakuliah',
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.okNested(rows, res)
            }
        })
}