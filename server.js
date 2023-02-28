require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE)

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection Error: " + err.message);
})

const app = require('./app')

app.listen(8000, () => {
    console.log("Server is lstening on Port 8000");
})