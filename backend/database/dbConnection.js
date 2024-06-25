import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI||"mongodb+srv://hamitsingh730:tzrZlauJT7go8bMX@cluster730.qx5mote.mongodb.net/?retryWrites=true", {
      dbName: "hotel",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
export default dbConnection;