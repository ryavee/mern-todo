const mongoose = require("mongoose");
const conn = async (req,res) => {
   try {
    await mongoose.connect("mongodb+srv://raviraj:raviraj@cluster0.hbsw8fd.mongodb.net/").then(() =>{
        console.log("connected")
    });
    
   } catch (error) {
    res.status(400).json({
        message: "Not connected",
    });
   }
};
conn();