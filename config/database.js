
const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    .then(()=>{console.log("connection succcessfull")})    
    .catch( (error) =>{
        console.log("connection unsucccessfull")
        console.error(error.meassage);
        process.exit(1);
        }) ; 
}

module.exports =dbConnect;
