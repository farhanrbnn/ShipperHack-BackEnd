const Locationbin = require('../model/locationbinModel')

const input_location_bin = async (req, res) => {
	const postLocationBin = new Locationbin({
		max_qty:req.body.max_qty,
		qty_now: req.body.qty_now,
		bin_code:req.body.bin_code
	})

	try {
		const savedPost = await postLocationBin.save()

		if (savedPost) {
			return res.status(200).send({
				'message':'success',
				'data':savedPost
			})
		} else {
			return res.status(400).send({
				'message':'Failed when storing data'
			})
		}
	} catch (err) {
		return res.status(500).send({
			'message':err
		})
	}
}

const get_all_location_bin = async (req, res) => {
	try {
		const getLocationBin = await Locationbin.find()

		if (getLocationBin) {
			return res.status(200).send({
				'message':'success',
				'data':getLocationBin
			})
		} else {
			return res.status(404).send({
				'message':'Not Found'
			})
		}
	} catch (err) {
		return res.status(500).send({
			'message':err
		})
	}
}

module.exports = {
	input_location_bin,
	get_all_location_bin
}