import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./db/connectDB.js";

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Gymholic backend running on port ${PORT}`);
  });
});
