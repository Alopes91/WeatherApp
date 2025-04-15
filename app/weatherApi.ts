// Importa a biblioteca Axios para realizar requisições HTTP
import axios from 'axios';

// Chave de acesso à API da WeatherAPI (essa chave deve ser mantida em segurança em ambientes reais)
const API_KEY = 'b4d371595fa54bc393d220550253103'; // Substitua com sua chave da WeatherAPI

// URL base para a consulta da previsão atual do tempo
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

// Função assíncrona que busca os dados do clima para uma cidade específica
export const getWeather = async (city: string) => {
    try {
        // Faz uma requisição GET para a API, passando a cidade e outros parâmetros necessários
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,   // Chave de autenticação
                q: city,        // Cidade consultada
                lang: 'pt',     // Idioma da resposta (português)
            },
        });
        // Retorna os dados recebidos da API
        return response.data;
    } catch (error) {
        // Exibe erro no console caso a requisição falhe
        console.error('Erro ao buscar dados do tempo:', error);
        // Relança o erro para ser tratado na função que chamou `getWeather`
        throw error;
    }
};
