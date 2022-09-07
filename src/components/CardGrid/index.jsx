import { Grid } from "@chakra-ui/react"
import { Card } from "../Card"

export const CardGrid = ({ pokemons = [] }) => {
  return (
    <Grid
      gridTemplateColumns={"repeat(auto-fill, minmax(12rem, 1fr))"}
      gridGap={"1.5rem"}
    >
      {pokemons.map((pokemon) =>
        <Card
          key={pokemon.name}
          name={pokemon.name}
          imageSrc={pokemon.image}
        />
      )}
    </Grid>
  )
}