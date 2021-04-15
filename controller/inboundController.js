const Inbound = require('../model/inboundModel')

const input_inbound = async (req, res) => {
	const postInbound = new Inbound({
		warehouse_code: req.body.warehouse_code,
		tenant_code: req.body.tenant_code,
		invoice_no: req.body.invoice_no,
		po_no: req.body.po_no,
		mcode: req.body.mcode,
		description: req.body.description,
		line: req.body.line,
		shipment_type: req.body.line,
		status: req.body.status,
		doc_rcvd_timestamp: req.body.doc_rcvd_timestamp,
		received_timestamp: req.body.received_timestamp,
		grn_data: req.body.grn_date,
		verified_date: req.body.verified_date,
		received_qty: req.body.received_qty,
		expected_qty: req.body.expected_qty,
		grn_qty: req.body.grn_qty,
		good_qty: req.body.good_qty,
		damage_qty: req.body.damage_qty,
		volumecbm: req.body.volumecbm,
		batch: req.body.batch,
		serial: req.body.serial,
		mfg_data: req.body.mfg_data,
		exp_data: req.body.exp_data,
		is_dispatch: req.body.is_dispatch,
		is_done: req.body.is_done,
		category_id: req.body.category_id,
		location_bin_id: req.body.location_bin_id
	})

	try {
		const savedPost = await postInbound.save()

		return res.status(200).send({
			'message':'success',
			'data':savedPost
		})
	} catch (err) {
		return res.status(400).send({
			'message':err
		})
	}
}

const get_all_inbound = async (req, res) => {
	try {
		const getInbound = await Inbound.find()

		if(getInbound) {
			return res.status(200).send({
				'message':'success',
				'data':getInbound
			})
		} else {
			return res.status(404).send({
				'message':'Not Found',
				'data': {}
			})
		}
	} catch(err) {
		return res.status(400).send({
			'message':err
		})
	}
}

const update_inbound = async (req,res) => {
	try {
		const query = {id:req.body.id}
		const updateId = {
			is_dispatch:req.body.status
		}

		const updateData = await Inbound.findByIdAndUpdate(req.body.id, updateId)
		console.log(updateData)
		if(updateData){
			return res.status(200).send({
				'message':'success'
			})
		} else {
			return res.status(400).send({
				'message':'update failed'
			})
		}
		
	} catch (err) {
		return res.status(500).send({
			'message':err
		})
	}
}

module.exports = {
	input_inbound,
	get_all_inbound,
	update_inbound
}