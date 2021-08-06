const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/usersRoute");
const postRoute = require("./routes/postsRoute");

dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(console.log("Connected to MOngoDB")).catch((err)=> console.log(err))


app.get("/",(req,res)=>{
    res.json({api:"API IS UP"})
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("API UP")
})

//demo login
//username: demo, email: test@gmail.com, password: password
