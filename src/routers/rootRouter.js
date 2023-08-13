import express from "express";
import demoRouter from "./demoRouter.js";

const rootRouter = express.Router();

rootRouter.use("/demo", demoRouter);

export default rootRouter;
