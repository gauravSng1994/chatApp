const mongoose = require('mongoose');

const communicationSchema = new mongoose.Schema({
    message:{type:String,required:true},
    timeStamp:{type:String, required:true},
    sender :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' ,
        required: true
    },
    receiver :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' ,
        required: true
    },
    chatRoom:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ChatRoom',
        required:true
    },
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now}
});
const Communication = mongoose.model('Communication',communicationSchema);

module.exports = Communication;