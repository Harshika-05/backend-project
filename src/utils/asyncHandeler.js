const asyncHandeler = (requestHandler) =>{
    (req , res , next) =>{
        Promise.resolve(requestHandler(req ,  res , next)).catch((err) => next(err))
    }
}
export {asyncHandeler}

// //this is an example to use try catch blocks
// const asyncHandeler = (fn) => async(req , res , next)=>{
//     try{
//         await fn(req , res , next)
//     }
//     catch(error)
//     {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
// }


//now this is an exammple to use promises
