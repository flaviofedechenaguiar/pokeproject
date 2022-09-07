import { Box, Button } from "@chakra-ui/react"
import { CardGrid } from "../../components/CardGrid"
import { Container } from "../../components/Container"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import { usePokemons } from "../../hooks/usePokemons"

export const Pokemons = () => {

  const { pokemons, loadMore, isLoading } = usePokemons();

  return (
    <>
      {isLoading && <Loading />}
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