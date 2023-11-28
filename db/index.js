let mongoose = require("mongoose");
let mongo_url = process.env.DB_URL;

async function initMongoDB () {
    options = {
        /* If mongo version is upgrade should use below connection properties */
        useNewUrlParser: true,
        useUnifiedTopology: true        
    }
    let mongo_connect = await mongoose.connect(mongo_url, options);
    if(mongo_connect) {
        console.log("MongoDB Connected!");
    } else {
        console.error("Failed to Connect to MongoDB");        
    }
}

module.exports = initMongoDB;