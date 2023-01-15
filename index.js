import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router.js";

dotenv.config();
const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use("/api", router);

async function startServer() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startServer().then(() => console.log("Connected to MongoDB"));
