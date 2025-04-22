const express = require('express')
const AuthController = require('../controllers/AuthController')
const RouterAuth = express.Router()

RouterAuth.post('/login', AuthController.login)

module.exports = RouterAuth