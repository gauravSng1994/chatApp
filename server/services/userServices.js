import User from '../models/User';
const createUser = (payload)=>{
    const {firstName,lastName,email,mobile,password} = payload;

    try {
        let user = new User({
            name:{
                first:firstName,
                last:lastName
            },
            email,
            mobile,
            password
        });
        user.save();
        return {
            success:true,
            user,
            error:null
        }
    }catch (e) {
        return {
            success: false,
            user:null,
            error: e
        }
    }
}