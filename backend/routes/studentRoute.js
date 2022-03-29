const express = require("express");
const { createStudent, getAllStudents } = require("../controller/studentController");

const router = express.Router();


router.route("/student/new").post(createStudent)
router.route("/students").get(getAllStudents)


module.exports = router;