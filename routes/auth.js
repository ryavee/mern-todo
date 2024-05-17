const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Sign up
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashpassword = bcrypt.hashSync(password);

       

        // Check if user with the given email or username already exists
        // const existingUser = await User.findOne({ $or: [{ email }, { username }] });

        // if (existingUser) {
        //     return res.status(400).json({ message: "User already exists." });
        // }

        // Create new user
        const user = new User({ email, username, password:hashpassword });
        await user.save();

        res.status(200).json({ message: " Sign Up Successful" });
    } catch (error) {
        // console.log(error);
        res.status(200).json({ message: "User Already Exists" });
    }
});

    //SIGN IN

    router.post("/signin",async(req,res) => {
        try {
            const user = await User.findOne({email: req.body.email});
            if(!user){
                res.status(200).json({message: "please Sign Up First"})
            }
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
            if(!isPasswordCorrect){
                res.status(200).json({message: "Password is not correct"});
            }
            const{password,...others } = user._doc
            res.status(200).json({others});

        } catch (error) {
            
        }

    });

module.exports = router;
