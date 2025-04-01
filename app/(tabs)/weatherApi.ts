import axios from 'axios';

const API_KEY = 'b4d371595fa54bc393d220550253103'; // Substitua com sua chave da WeatherAPI
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

export const getWeather = async (city: string) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: city,
                lang: 'pt',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados do tempo:', error);
        throw error;
    }
};