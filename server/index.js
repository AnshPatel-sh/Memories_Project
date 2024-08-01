import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import postRoutes from "./routes/posts.js";
import dotenv from 'dotenv'

dotenv.config(); 
const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);


const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection is successful:${mongoose.connection.host}`)
      return console.log(`Server is running on port:${PORT}`);
    });
  })
  .catch((error) => {
    return console.log("Error in connecting to the mongodb", error);
  });

//   mongoose.set('useFindAndModify',false);
