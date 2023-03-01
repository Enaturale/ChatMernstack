const mongoose = require('mongoose');

const ChatroomSchema = new mongoose.Schema({
    username:{
        type: String,
        required: "Username is required!",
    },
})

module.exports = mongoose.model('ChatRoom', ChatroomSchema)