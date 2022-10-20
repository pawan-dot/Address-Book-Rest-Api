import express from "express";
export const app = express();
import cookieParser from "cookie-parser";
import morgan from "morgan"
//  parse the incoming requests with JSON payloads 
app.use(express.json());
// middleware which parses cookies attached to the client request object.
app.use(cookieParser());

//HTTP request logger middleware 
app.use(morgan('dev'))
// Importing Routes
import { userRouter } from "./routes/User.js";
import { contactRouter } from "./routes/contacts.js";
import { Error } from "mongoose";

// Using Routes
app.use("/api/v1", contactRouter);
app.use("/api/v1", userRouter);


//Error handling if not found any route 
app.use((req, res, next) => {
    const error = new Error()
    res.status(404).json("Not Found")
    next()
})