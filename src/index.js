import dotenv from "dotenv";
 import connectDB from "./db";

dotenv.config({
    path : './env'
})

connectDB()
.then(() =>
{
    app.listen(process.env.PORT || 8000 , () =>
    {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
}
).catch((err) =>
{
    console.log("MMongo DB connction failed!!!" , err)
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