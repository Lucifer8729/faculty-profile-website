import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import profileRoutes from "./routes/profile.js";
import publicationRoutes from "./routes/publication.js";
import patentRoutes from "./routes/patent.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/profile", profileRoutes);
app.use("/publication", publicationRoutes);
app.use("/patent", patentRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Faculty Profile Website Backend API");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
