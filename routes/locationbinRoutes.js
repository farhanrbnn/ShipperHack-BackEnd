const express = require('express')
const router = express.Router()

const locationBinController = require('../controller/locationbinController')

router.post('/locationbin/store', locationBinController.input_location_bin)
router.get('/locationbin', locationBinController.get_all_location_bin)

module.exports = router