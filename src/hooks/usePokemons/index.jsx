import { useEffect, useState } from "react"
import { getPokemons } from "../../services/pokemons";

export const usePokemons = function () {

  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    request();
  }, [offset]);

  async function request() {
    const response = await getPokemons({ limit: 20, offset });
    setPokemons((prevPokemons) => ([...prevPokemons, ...response]));
    setIsLoading(false);
  }

  function loadMore() {
    const PER_PAGE = 10;
    setOffset((prevOffset) => prevOffset + PER_PAGE);
  }

  return {
    pokemons,
    loadMore,
    isLoading
  }
} 