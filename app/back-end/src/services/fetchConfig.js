import { config } from 'dotenv';

config();

const {
  KEY: key,
  HOST: host
} = process.env

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key,
		'X-RapidAPI-Host': host 
	}
};

export { options };