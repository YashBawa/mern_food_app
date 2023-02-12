const mongoose = require('mongoose');
const mongo_uri = 'mongodb+srv://mern-stack-1:mern-stack-1@cluster0.33ykczq.mongodb.net/mern-food-app?retryWrites=true&w=majority';
const mongodb = async() => {
    await mongoose.connect(mongo_uri ,{useNewUrlParser:true},(err,result) =>{
        // console command used just to check if the connection is established or not 
        if (err) console.log("----",err)
        else {
            console.log("connected");
        }
        console.log ("connected");
        // for fetching data from the server or database
        // using the below command the data is being fetched from that specific collection
        const fetched_data =  mongoose.connection.db.collection("food_items")
        // empty object inside the find to fetch all data 
        fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err)
            else 
            {
                // console.log(data);
            }
        }) 

    });
}

module.exports = mongodb;



