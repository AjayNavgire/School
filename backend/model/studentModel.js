const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Please Enter Student Name"]
    },
    email: {
        type: String,
        required: [ true, "Please Enter email address"]
    },
    phone: {
        type: Number,
        required: [true, "Please Enter Phone Number"]
    }
})

module.exports = mongoose.model("Student",studentSchema)