import { Flex, Heading, Text } from "@chakra-ui/react";

export function MainPresentation() {
  return (
    <Flex
      maxW="1080px"
      mx="auto"
      py="4rem"
      direction="column"
      textAlign="center"
    >
      <Heading fontSize="4xl" fontWeight="700" mb="1.5rem">
        Somos a Liga de Empreendedorismo da Poli
      </Heading>
      <Text fontSize="xl" fontWeight="500">
        Temos como missão <strong>inspirar</strong>, <strong>conectar</strong> e{" "}
        <strong>capacitar</strong> futuros empreendedores e empreededoras da
        POLI
      </Text>
    </Flex>
  );
}
