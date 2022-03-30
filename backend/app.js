const express = require("express")
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json())


//Route Imports
const course = require("./routes/courseRoute")
const student = require("./routes/studentRoute")


app.use("/api/v1", course)
app.use("/api/v1", student)

// Middleware for Errors
app.use(errorMiddleware)


module.exports = app