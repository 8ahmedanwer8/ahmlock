import "./App.css";
import {
  Box,
  Spacer,
  VStack,
  Flex,
  Center,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
function App() {
  var [status, setStatus] = useState("Nobody");
  return (
    <div className="App">
      <Box
        w="full"
        h="100vh"
        bg="#36393F"
        px="10"
        display="flex"
        justifyContent="left"
        alignItems="center"
      >
        <Box>
          <Heading color="white">Live Feed</Heading>
          <Box w="60vw" h="500px" bg="gray.200"></Box>
        </Box>
        <Spacer></Spacer>
        <Box>
          <Heading>Live Feed</Heading>
          <Box w="30vw" h="500px" bg="gray.200">
            <Text>Status: {status}</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
