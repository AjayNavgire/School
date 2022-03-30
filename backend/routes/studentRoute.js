const express = require("express");
const { get } = require("express/lib/response");
const { createStudent, getAllStudents, getStudentDetails, updateStudent } = require("../controller/studentController");

const router = express.Router();


router.route("/student/new").post(createStudent)
router.route("/students").get(getAllStudents)
router.route("/student/:id").get(getStudentDetails).put(updateStudent)

module.exports = router;