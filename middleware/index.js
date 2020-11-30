var express = require('express');
var auth = require('./auth')
var router = express.Router();
var verifikasi = require('../middleware/verifikasi')

// daftarkan kontroller registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

// halaman yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(), auth.halamanRahasia)

module.exports = router;