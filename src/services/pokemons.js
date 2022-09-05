import { api } from "./config/axios"

export const getPokemons = async ({ limit, offset }) => {
  const { data: { results } } = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  return results.map((response, index) => ({
    name: response.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }))
}