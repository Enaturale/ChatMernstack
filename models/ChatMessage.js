const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema({
    chatroom:{
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom is required!",
        ref: "ChatRoom"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom is required!",
        ref: "User"
    },
    message:{
        type: String,
        required: "Message is required"
    }
})

module.exports = mongoose.model('Message', ChatMessageSchema)