const express = require('express')

const userControllers = require('../controllers/user-contollers')

const router = express.Router()

router.get('/:uP', userControllers.home)

module.exports = router