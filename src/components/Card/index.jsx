import { Box, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react";
import { getColor } from "../../utils/vibrant-color";

export const Card = ({ name, imageSrc }) => {

  const [bgColor, setBgColor] = useState("gray.100");

  function onLoadImage(event) {
    getColor(event.target, function (color) {
      setBgColor(color);
    });
  }

  return (
    <Box
      h="15rem"
      borderRadius={".5rem"} borderWidth={".2rem"} borderColor={"white"}
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      overflow={"hidden"}
      bg={bgColor}
      transition={"transform .2s"}
      _hover={{transform: "scale(1.1)"}}
    >
      <Stack
        w={"14rem"} height={"14rem"}
        position={"absolute"} top={"-1rem"}
      >
        <Image src={imageSrc} layout={"fill"} onLoad={onLoadImage} />
      </Stack>
      <Text
        mt={"auto"} mb={"1rem"} textTransform={"capitalize"}
        fontSize={"1.7rem"} as="b" color="white"
      >
        {name}
      </Text>
    </Box>
  )
}