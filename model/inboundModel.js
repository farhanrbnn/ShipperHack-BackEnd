const mongoose = require('mongoose')

const inboundSchema = mongoose.Schema({
	warehouse_code: {
		type: String
	},
	tenant_code: {
		type: String
	},
	sno: {
		type: Number
	},
	invoice_no: {
		tpye: String
	},
	po_no: {
		type: String
	},
	mcode: {
		type: String
	},
	description: {
		type: String
	},
	line: {
		type: Number
	},
	shipment_type: {
		type: String
	},
	status: {
		type: String
	},
	doc_rcvd_timestamp: {
		type: Number
	},
	received_timestamp: {
		type: Number
	},
	grn_date: {
		type: Number
	},
	verified_date:{
		type:String
	},
	received_qty: {
		type: Number
	},
	expected_qty: {
		type: Number
	},
	grn_qty: {
		type: Number
	},
	good_qty: {
		type: Number
	},
	damage_qty: {
		type: Number
	},
	volumecbm: {
		type: Number
	},
	batch: {
		type: String
	},
	serial: {
		type: String
	},
	mfg_data: {
		type: Number
	},
	exp_data: {
		type: Number
	},
	is_dispatch: {
		type: Boolean
	},
	is_done: {
		type: Boolean
	},
	category_id: {
		type: String
	},
	location_bin_id: {
		type: String
	}
})

module.exports = mongoose.model('inbound', inboundSchema)