const express = require('express')
const router = express.Router()
const { getMaterie } = require('../controllers/materieController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', getMaterie)

module.exports = router
