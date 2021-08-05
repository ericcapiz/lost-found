const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("Connected to MOngoDB")).catch((err)=> console.log(err))

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({api:"API IS UP"})
})


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("API UP")
})