const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Course Name"],
    },
    professorName : {
        type: String,
        required: [true, "Please Enter Professor Name"]
    },
    description:{
        type: String,
        required:[true, "Please Enter Course Description"]
    }
})

module.exports = mongoose.model("Course",courseSchema)