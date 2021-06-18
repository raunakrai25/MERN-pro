const express = require("express");
const app = express();
const mongoose = require("mongoose");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//connecting mongoDB with server.
mongoose.connect("mongodb://localhost:27017/blog",{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
//creating promise to check connection.
.then(()=>{
    console.info("mongoDB is connected successfully");
})
.catch((error)=>{
    console.error("mongoDB connection failed.");
});

//using API's for user.
app.use('/user',userRoutes);

//using API's for Admin.
app.use('/admin',adminRoutes);

//this server will run on 1903 port number.
const port = 1903
app.listen(port,()=>{
    console.log(`this server is running on port ${port}`);
})