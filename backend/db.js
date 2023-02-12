const mongoose = require('mongoose');
const mongo_uri = 'mongodb+srv://mern-stack-1:mern-stack-1@cluster0.33ykczq.mongodb.net/?retryWrites=true&w=majority';
const mongodb = async() => {
    await mongoose.connect(mongo_uri ,{useNewUrlParser:true},(err,result) =>{
        // console command used just to check if the connection is established or not 
        if (err) console.log("----",err)
        else {
            console.log("connected");
        }
        console.log ("connected");
    });
}

module.exports = mongodb;



