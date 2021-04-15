const mongoose = require('mongoose')

const locationbinSchema = mongoose.Schema({
	max_qty: {
		type: Number
	},
	qty_now: {
		type: Number
	},
	bin_code: {
		type: String
	}
})

module.exports = mongoose.model('locationbin', locationbinSchema)