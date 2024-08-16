import mongoose, { mongo } from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB=async()=>{
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); 
       console.log(`\n mongoDB connected!! db Host: ${
        connectionInstance.connection.host}`);
        console.log(connectionInstance);
    }catch(error){
          console.log("MOngoDB Connection Error",error.cause);
          process.exit(1);
    }
}

export default connectDB