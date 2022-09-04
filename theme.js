import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const COLOR = "gray.600";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode(COLOR, COLOR)(props)
      }
    })
  }
});

export default theme;
