const express = require("express")
const app = express();

app.use(express.json())

//Route Imports
const course = require("./routes/courseRoute")
const student = require("./routes/studentRoute")


app.use("/api/v1", course)
app.use("/api/v1", student)

module.exports = app