import  dotenv  from "dotenv"; 
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB()






/*
const app = express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error",(error)=>{
            console.log("Error: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listning on port ${process.env.PORT} `);
        })
    }catch(err){
        console.log("ERROR: ",err)
        throw err
    }
})()

*/