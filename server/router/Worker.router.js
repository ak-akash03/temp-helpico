const services = require("../controllers/worker.service");

const router = require("express").Router();

router.route('/worker').get(services)

module.exports = router