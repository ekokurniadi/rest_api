'use strict'

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index)

    app.route('/tampil')
        .get(jsonku.tampilSemuaMahasiswa)

    app.route('/tampil/:id')
        .get(jsonku.getById)

    app.route('/tambah')
        .post(jsonku.tambahMahasiswa)

    app.route('/ubah')
        .put(jsonku.updateMahasiswa)

    app.route('/hapus')
        .delete(jsonku.deleteMahasiswa)

    app.route('/tampilmatakuliah')
        .get(jsonku.tampilGroupMatakuliah)
}