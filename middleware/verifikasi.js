const jwt = require('jsonwebtoken')
const config = require('../config/secret')


function verifikasi() {
    return function (req, res, next) {
        var role = req.body.role;
        // cek auth header
        var tokenWithBearer = req.headers.authorization
        if (tokenWithBearer) {
            var token = tokenWithBearer.split(' ')[1];

            // verifikasi jwt
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return res.status(401).send({ auth: false, message: 'Token tidak terdaftar!' });
                } else {
                    if (role == 2) {
                        req.auth = decoded;
                        next();
                    } else {
                        return res.status(401).send({ auth: false, message: 'Gagal mengautorisasi role anda' });
                    }
                }
            });
        } else {
            return res.status(401).send({ auth: false, message: 'Token tidak terdaftar!' });
        }
    }
}

module.exports = verifikasi;