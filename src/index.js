import  dotenv  from "dotenv"; 
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is is running port : ${process
            .env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongo db connection faild !!",err);
})






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