const router = require("express").Router();

const studentData = require("../controllers/student.controllers");

router.route("/student").post(studentData);

module.exports = router;
