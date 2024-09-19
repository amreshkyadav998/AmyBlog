import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import {dbConnection} from "./database/dbConnection.js";
import {errorMiddleware} from "./middlewares/error.js";
import userRouter from './routes/userRouter.js';
// import blogRouter from './routes/blogRouter.js';


const app = express();
dotenv.config({ path: "./config/config.env" });

//middleware
app.use(
  cors({
    origin: [],
    method: ["GET", "POST", "DELETE", "POST"],
    Credential: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Router
app.use("/api/v1" , userRouter);

//connection with database
dbConnection();

//error middleware
app.use(errorMiddleware);

export default app;
