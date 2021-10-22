const mongoose = require('mongoose');
const connectionString = `${process.env.URL_DB}`;

mongoose.connect(connectionString).then(()=>{
    console.log("Database connected");
}).catch((error)=>console.log(error));

process.on('uncaughtException',error=>{
    console.log(error)
    mongoose.disconnect();
});



