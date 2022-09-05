import { Box, Button } from "@chakra-ui/react"
import { CardGrid } from "../../components/CardGrid"
import { Container } from "../../components/Conteiner"
import { Header } from "../../components/Header"
import { usePokemons } from "../../hooks/usePokemons"

export const Pokemons = function () {

  const { pokemons, loadMore } = usePokemons();

  return (
    <>
      <Header />
      <Box mt={"1rem"}>
        <Container>
          <CardGrid pokemons={pokemons} />
          <Button display={"block"} m={"1rem auto"} onClick={loadMore}>More</Button>
        </Container>
      </Box>
    </>
  )
}