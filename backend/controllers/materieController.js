const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Materie = require('../models/materieModel')

// @desc    Get all class data
// @route   GET /api/materie
// @access  Private
const getMaterie = asyncHandler(async (req, res) => {
  try {
    const classes = await Materie.find({})
    res.json(classes)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
})

module.exports = {
  getMaterie,
}
