import dotenv from "dotenv";
 import connectDB from "./db";

dotenv.config({
    path : './env'
})

















//  import express from "express";
//  const app = express();
//  ( async() => 
// {
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error" , (error) =>
//         {
//             console.log("ERROR:" , error);
//             throw error
//         })

//         app.listen(process.env.PORT , () =>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch(error)
//     {
//         console.log("ERROR : " , error);
//         throw err
//     }
// })()