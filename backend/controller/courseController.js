const Course = require("../model/courseModel")


exports.createCourse = async(req, res, next)=>{

    const course = await Course.create(req.body)

    res.status(201).json({
        success: true,
        course
    })
}

exports.getAllCourse = async(req, res)=>{
     
    const courses = await Course.find();

    res.status(200).json({
        success: true,
        courses
    })
}
