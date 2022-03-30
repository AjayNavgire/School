const Student = require("../model/studentModel");
const ErrorHandler = require("../utils/errorhandler");


// Create Student 
exports.createStudent = async (req, res, next)=>{

    const student = await Student.create(req.body);

    res.status(201).json({
        success: true,
        student
    })
}

// Get All Student
exports.getAllStudents = (async (req, res)=>{
    
    const students = await Student.find()

    res.status(200).json({
        success: true,
        students
    })
})

//Get Student Details
exports.getStudentDetails = async (req, res, next) =>{
    
    const student = await Student.findById(req.params.id);

    if(!student){
        return next(new ErrorHandler("Student not found",404))
    }

    res.status(200).json({
        success: true,
        student
    })
}

// Update Student 
exports.updateStudent = async(req, res) =>{

    let student = await Student.findById(req.params.id);

    if(!student){
        return next(new ErrorHandler("Student not found", 404))
    }

    student = await Student.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        renValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        student
    })
}