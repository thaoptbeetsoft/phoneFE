import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../../../model/game/Store";
import CanvasBoard from "./CanvasBoard";
import ScoreCard from "./ScoreCard";

const Snake = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">SNAKE GAME</Heading>
          <ScoreCard />
          <CanvasBoard height={600} width={1000} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
};

export default Snake;