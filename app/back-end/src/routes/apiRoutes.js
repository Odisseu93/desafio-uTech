import express from 'express';
import {  OpenWeatherApiController } from "../controllers/OpenWeatherApiController.js";

const router = express.Router();

router.get('/', OpenWeatherApiController.getListWeatherForecasts);


export default router;

