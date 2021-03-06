// import { ChakraProvider, theme } from "@chakra-ui/react"

export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

// export const decorators = [
//   (Story,context) => <ChakraProvider theme={theme}>
//     <Story {...context} />
//   </ChakraProvider>
// ]