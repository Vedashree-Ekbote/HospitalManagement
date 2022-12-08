const mongoose = require('mongoose');
const validator= require('validator');

const registrationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    birthdate:{
        type:Date,
        required: true
    },
    gender:{
        type:String,
        require:true
    },
    Age:{
        type:Number,
        require:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    Occupation:{
        type:String,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    username:{
        type:String
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
   
});
// export const signup = async (req, res, next) => {
//     const { email, password } = req.body;
//     let existingUser;
//     try {
//       existingUser = await User.findOne({ email });
//     } catch (err) {
//       return console.log(err);
//     }
//     if (existingUser) {
//         return res
//           .status(400)
//           .json({ message: "User Already Exists! Login Instead" });
//       }
    
//       const user = new User({
//         email,
//         password,
        
//       });
    
//       try {
//         await user.save();
//       } catch (err) {
//         return console.log(err);
//       }
//       return res.status(201).json({ user });

// };
mongoose.model("Registration", registrationSchema);
