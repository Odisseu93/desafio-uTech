import { config } from 'dotenv';

import { options } from './fetchConfig.js';

config();

const { HOST: host, APPID: appid } = process.env;

const url = `https://${host}/forecast?appid=${appid}&q=florianopolis&cnt=4&units=metric`;

export const getListWeatherForecastsApi = async () =>  await (await fetch(url, options)).json();