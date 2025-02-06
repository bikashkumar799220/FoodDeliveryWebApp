import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sanjeet:6203954502@cluster0.gv924.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
