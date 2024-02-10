require('dotenv').config();
const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bcryptjs=require('bcryptjs');
const app=express();


//middleware
app.use(cors());
app.use(express.json())


mongoose.connect(process.env.MONB_URL);
const db=mongoose.connection;
db.on('error',(err)=>{
    console.error("mongodb connection error",err)
})
db.once('open',()=>
console.log("MOngodb is connected"));

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User=mongoose.model('User',userSchema);

app.post('/register',async(req,res)=>{
    try{
        const hasspassword=await bcryptjs.hashSync(req.body.password,10)
        const newUser=new User({
          name:req.body.name,
          email:req.body.email,
          password:hasspassword
        })
        const savedUser=await newUser.save();
        res.status(201).json(savedUser)
    }catch (error){
     console.error("Error During registrayion",error);
     res.status(500).json({error:"internal Server problem"})
    }
});
app.listen(process.env.PORT,()=>{
console.log("server started");
})