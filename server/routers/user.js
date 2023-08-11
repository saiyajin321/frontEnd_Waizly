const express = require('express')
const UserController = require('../controller/userController')
const router = express.Router()


router.post("/login", UserController.login)


module.exports = router