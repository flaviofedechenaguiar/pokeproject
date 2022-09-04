import { HStack } from "@chakra-ui/react"
import Image from "next/image"

export const Header = function () {
  return (
    <header>
      <HStack py={".3rem"} justifyContent={"center"} bg={"gray.800"}>
        <Image src="/images/pokeapi.png" width={"231px"} height={"92px"}/> 
      </HStack>
    </header>
  )
}