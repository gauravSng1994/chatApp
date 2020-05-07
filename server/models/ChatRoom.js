const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
    status:{ type:String, required:true}, //Friend,Pending,Blocked
    participants :{ type: Array, required: true},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now}
});
const ChatRoom = mongoose.model('ChatRoom',chatRoomSchema);

module.exports = ChatRoom;