import express from 'express';
import { OpenweatherController } from "../controllers/OpenweatherController.js";

const router = express.Router();

router.get('/', OpenweatherController.getListWeatherForecasts);


export default router;

