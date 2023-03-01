require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //useCreateIndex: true,
})

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection Error: " + err.message);
})

mongoose.connection.once('open', () => {
    console.log("MongoDb Connected");
})

//importing the models
require("./models/User");
require("./models/ChatRoom")
require("./models/ChatMessage")

const app = require('./app')

app.listen(8000, () => {
    console.log("Server is lstening on Port 8000");
})