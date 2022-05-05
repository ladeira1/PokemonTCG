import axios from 'axios';

export const pokemonApi = axios.create({
  headers: {
    'X-Api-Key': process.env.API_KEY ?? '',
  },
  baseURL: 'https://api.pokemontcg.io/v2/',
});
