const mongoose = require('mongoose');
const mongo_uri = 'mongodb://mern-stack-1:mern-stack-1@ac-my9rmvz-shard-00-00.33ykczq.mongodb.net:27017,ac-my9rmvz-shard-00-01.33ykczq.mongodb.net:27017,ac-my9rmvz-shard-00-02.33ykczq.mongodb.net:27017/mern-food-app?ssl=true&replicaSet=atlas-wka79m-shard-0&authSource=admin&retryWrites=true&w=majority';
const mongodb = async() => {
    await mongoose.connect(mongo_uri ,{useNewUrlParser:true},(err,result) =>{
        // console command used just to check if the connection is established or not 
        if (err) console.log("----",err)
        else {
            console.log("connected");
        }
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



