import express from "express";

import { getCurrentWeather } from "../controllers/weatherControllers.js";

const weatherRouter = express.Router();

weatherRouter.route("/").get(getCurrentWeather);

export default weatherRouter;
