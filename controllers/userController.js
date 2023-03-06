const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then")

//Register authentication
exports.regsiter = async (req, res) => {
    const { username, email, password } = req.body;

    const emailRegex = /[@gmail.com|@yahoo.com|@hotmail.com]$/;
    if (!emailRegex.test(email)) throw "Your email is not supported by our server"

    //We want a minimum of 6 characters
    if (password.length < 6) throw "Password must be more than 6 characters!"


    const user = new User({ username, email, password: sha256(password + process.env.SALT) })

    await user.save();

    res.json({
        message: "User [" + username + "] Registered Successfully"
    });

};

//login authentication
exports.login = async (req, res) => { 
    const {email, password} = req.body;
    const user = await User.findOne({email, password: sha256(password + process.env.SALT) })

    if(!user) throw "Email and Password do not match";

    const token =  jwt.sign({id: user.id}, process.env.SECRET )

    res.json({
        message: "User Logged in Successfully",
        token
    })


};
