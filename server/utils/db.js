require("dotenv").config()
const mongoose =  require("mongoose")



const URI = process.env.MONGO_URI



const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successfully : ");        
    } catch (error) {
        console.log("Db Connection Failed : ");
        process.exit(0);
    }
}


module.exports = connectDB; 

