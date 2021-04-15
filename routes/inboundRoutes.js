const express = require('express')
const router = express.Router()
const Inbound = require('../model/inboundModel.js')

const inboundController = require('../controller/inboundController')

router.post('/inbound/store', inboundController.input_inbound)
router.get('/inbound', inboundController.get_all_inbound)
router.put('/inbound/update', inboundController.update_inbound)

module.exports = router