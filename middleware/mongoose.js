import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect("mongodb://127.0.0.1:27017/bollywood", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return handler(req, res);
}

export default connectDB;