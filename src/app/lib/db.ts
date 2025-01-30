
import mongoose from "mongoose"

const MongoDB_Url=process.env.MONGODB_URI


export const connect=async()=>{
    try{
      if(!MongoDB_Url){
       throw new Error("MongoDb connection url is not defined")
      }

      await mongoose.connect(MongoDB_Url)
     const connection= mongoose.connection
     connection.on("connected",()=>{
        console.log("mongoDb connected successfully") 
     })
     connection.on("error",(error)=>{
        console.error("MongoDb connection error:",error)
     })
    }catch(error){
        console.error("Failed to connect to mongodb",error)
    }
}