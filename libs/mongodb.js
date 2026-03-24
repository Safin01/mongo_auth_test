import mongoose from "mongoose";

export default async function ConnectMongoDB(){
        try{
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("Connected to mongodb");
        } catch(error) {
            console.log(error);
        }
    };

// export default ConnectMongoDB;