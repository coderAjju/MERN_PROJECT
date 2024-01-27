const express = require('express')
const router = express.Router()
const auths = require('../controllers/auth-controllers.js')

router.get("/",auths.home)

router.route("/register").get(auths.register)

module.exports = router;