import mongoose from "mongoose";
import {DB_NAME} from "../constants";
const connectDB = async () =>
{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
        console.log(connectionInstance);
    } catch{
        console.log("MONGODB connection error" , error);
        process.exit(1)
    }
}

export default connectDB;