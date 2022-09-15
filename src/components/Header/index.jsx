import { HStack } from "@chakra-ui/react"
import Image from "next/image"
import { GitHubCorner } from "../GitHubCorner"

export const Header = () => {
  return (
    <header>
      <GitHubCorner />
      <HStack py={".3rem"} justifyContent={"center"} bg={"gray.800"}>
        <Image src="/images/pokeapi.png" width={"231px"} height={"92px"} alt="Pokeapi"/>
      </HStack>
    </header>
  )
}