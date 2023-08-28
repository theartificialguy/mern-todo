import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

import userRoutes from "./routes/user.routes.js";

connectDB();

const app = express();

app.use(express.json()); // allows us to parse json from http body
app.use(express.urlencoded({ extended: true })); // allows us to send form data

app.use(cookieParser())

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    // server health check route
    res.status(200).send("Server ready!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on post ${PORT}`));