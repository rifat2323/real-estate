import mongoose from 'mongoose'


let isConnected =false
const connectDB = async ()=>{
    if (isConnected) {
        console.log('Already connected to MongoDB');
        return mongoose.connection.readyState;
      }
   
    try{
     const conn = await mongoose.connect(process.env.MONGO_URI!)
      const ready = mongoose.connection.readyState
      isConnected = true;
     mongoose.connection.once("open",()=>{
        console.log("connected to db")
     })
      mongoose.connection.on("error",()=>{
        console.log("error connecting to db")
      })
      mongoose.connection.on("disconnected",()=>{
        console.log("disconnected from db")
      })
      return ready
    }catch(error){
        console.log(error)
        return error
    }
}

export default connectDB