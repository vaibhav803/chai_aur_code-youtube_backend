import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async() => {
     try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST:
            ${connectionInstance.connection.host}`)
    }   catch(error){
            console.log("MongodB connection failed",error);
            process.exit(1)
            
        }
}

export default connectDB

/*
import express from 'express'
const app = express()
//iffy

;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error",(error) => {
            console.log("Error: ",error);
            throw error
        })

        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on PORT ${PORT}`)
        })
    }
    catch(error){
        console.error("Error: ",error)
        throw err
    }
})()

*/