const express = require("express")
const { createCourse, getAllCourse } = require("../controller/courseController")


const router = express.Router()

router.route("/course/new").post(createCourse)
router.route("/courses").get(getAllCourse)

module.exports = router;