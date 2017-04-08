import axios from 'axios';
import {fetchWeatherByCity} from './../../config/open-weather-map.config.js';

const FETECH_WEATHER = 'FETECH_WEATHER'

export const fetchWeather = (city)=>{
	const request = axios.get(fetchWeatherByCity(city));
	return {
		type: FETECH_WEATHER,
		payload: request
	}
}

