const mongoose = require('mongoose');

const url = "mongodb+srv://surajkupale:suraj1234@cluster0-nwvre.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async function(){
    await mongoose.connect(url,function(err){
        if(err){
    console.log(err);
    }
    else{
        console.log('conection established.....!!!');
    }
});    
};

module.exports =  connectDB;   
