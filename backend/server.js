import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db.js";

import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Load environment variables
dotenv.config();

//app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
//mongodb+srv://sanjeer620395:8r1chlXK4QBSER6L@cluster0.yfq4vm3.mongodb.net/?
// mongodb+srv://sanjeet:<db_password>@cluster0.gv924.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
