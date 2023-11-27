import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connect to mongodb 😶‍🌫️☁️")
    }catch (error) {
        console.log(error);
    }
};

export default connectMongoDB