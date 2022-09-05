import { Box } from "@chakra-ui/react"

export const Container = function ({ children }) {
  return (
    <Box maxWidth={"1440px"} m="0 auto" px="1rem">
      {children}
    </Box>
  )
}