import express from "express";
import { getHello } from "../controllers/demoController.js";

const demoRouter = express.Router();

demoRouter.get("/get-hello", getHello);

export default demoRouter;
