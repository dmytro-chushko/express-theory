import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST || "";

const app = express();

app.use(express.json()); // need provide ability to read json

const startApp = async () => {
  try {
    await mongoose.connect(DB_HOST);
    app.listen(PORT, () => console.log(`Server sarted at port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

startApp();
