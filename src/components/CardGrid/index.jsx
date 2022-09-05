import { Grid } from "@chakra-ui/react"
import { Card } from "../Card"

export const CardGrid = function ({ pokemons = [] }) {
  return (
    <Grid
      gridTemplateColumns={"repeat(auto-fill, minmax(12rem, 1fr))"}
      gridGap={"1.5rem"}
    >
      {pokemons.map(function (pokemon) {
        return <Card name={pokemon.name} imageSrc={pokemon.imageSrc} />
      })}
    </Grid>
  )
}