const Student = require("../model/studentModel")

exports.createStudent = async (req, res, next)=>{

    const student = await Student.create(req.body);

    res.status(201).json({
        success: true,
        student
    })
}

exports.getAllStudents = (async (req, res)=>{
    
    const students = await Student.find()

    res.status(200).json({
        success: true,
        students
    })
})