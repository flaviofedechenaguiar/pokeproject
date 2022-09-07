import { CircularProgress, Stack } from "@chakra-ui/react"

export const Loading = () => {
  return (
    <Stack
      position={"fixed"} top="0" bottom="0" left="0" right="0" zIndex={"1"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"blackAlpha.500"}
    >
      <CircularProgress isIndeterminate color={"green.300"} size={"5rem"} />
    </Stack>
  )
}