import { api } from "./config/axios"

export const getPokemons = async ({ limit, offset }) => {
  const { data: { results } } = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  const responses = await Promise.all(results.map(result => api.get(result.url)));
  return responses.map(response => response.data)
}