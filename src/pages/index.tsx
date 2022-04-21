import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import TransferComponent from "../components/TransferComponent";

export default function Index() {
  return (
    <>
      <Box w="100vw" h="100vh">
        <Center h="100%">
          <DarkModeSwitch />
          <TransferComponent />
        </Center>
      </Box>
    </>
  );
}
