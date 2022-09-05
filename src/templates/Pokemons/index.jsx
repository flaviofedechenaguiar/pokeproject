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
        </Container>
      </Box>
      <Button onClick={loadMore}>More</Button>
    </>
  )
}