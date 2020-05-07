const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        first: {type: String},
        last: {type: String}
    },
    online:{type:Boolean, required:false},
    mobile:{type:String,required:true},
    email:{type:String,required: true},
    password:{type:String,required:true},
    dob:{type:Date},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now}
});
const User = mongoose.model('User',userSchema);

export default User;