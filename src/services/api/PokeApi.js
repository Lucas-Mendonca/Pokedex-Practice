import axios from "axios";

export const PokeAPIv2 = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 1500,
})