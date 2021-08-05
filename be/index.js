const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("Connected to MOngoDB")).catch((err)=> console.log(err))


app.get("/",(req,res)=>{
    res.json({api:"API IS UP"})
})

app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("API UP")
})

//demo login
//username: demo, email: test@gmail.com, password: password
