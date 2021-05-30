import { Box, Flex, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FaRocket, FaHiking, FaRegCalendarAlt } from "react-icons/fa";

export function MainProjects() {
  return (
    <>
      <Flex
        maxW="1080px"
        mx="auto"
        w="40%"
        align="center"
        direction="column"
        py="4rem"
        borderTop="1px"
      >
        <Heading fontSize="4xl" fontWeight="700" mb="1rem">
          Vá além da POLI
        </Heading>
        <Text fontSize="xl" fontWeight="500">
          Conheça nossos projetos
        </Text>
      </Flex>

      <Flex maxW="1080px" mx="auto" align="center" justify="center">
        <SimpleGrid gap="5rem" columns={[1, 3]} mb="4rem">
          <Box
            bg="gray.50"
            h="330px"
            w="300px"
            mx="auto"
            boxShadow="2xl"
            align="center"
            justify="center"
            p="2rem"
            borderRadius="5px"
            borderTopWidth="5px"
            borderColor="yellow.500"
          >
            <Icon as={FaRocket} fontSize="5rem" color="yellow.500" mb="2rem" />
            <Box color="blue.800">
              <Heading fontSize="lg" mb="0.5rem">
                Garagem de Startups
              </Heading>
              <Text fontSize="sm">
                Criação de um projeto real utilizando os famosos métodos de
                desenvolvimento de produtos em startups
              </Text>
            </Box>
          </Box>
          <Box
            bg="gray.50"
            h="330px"
            w="300px"
            mx="auto"
            boxShadow="2xl"
            align="center"
            justify="center"
            p="2rem"
            borderRadius="5px"
            borderTopWidth="5px"
            borderColor="yellow.500"
          >
            <Icon as={FaHiking} fontSize="5rem" color="yellow.500" mb="2rem" />
            <Box color="blue.800">
              <Heading fontSize="lg" mb="0.5rem">
                Capacitação Interna
              </Heading>
              <Text fontSize="sm">
                Trilhas de capacitação e evolução pessoal e técnica dos nossos
                membros, baseadas nos três perfis mais comuns de fundadores
              </Text>
            </Box>
          </Box>
          <Box
            bg="gray.50"
            h="330px"
            w="300px"
            mx="auto"
            boxShadow="2xl"
            align="center"
            justify="center"
            p="2rem"
            borderRadius="5px"
            borderTopWidth="5px"
            borderColor="yellow.500"
          >
            <Icon
              as={FaRegCalendarAlt}
              fontSize="5rem"
              color="yellow.500"
              mb="2rem"
            />
            <Box color="blue.800">
              <Heading fontSize="lg" mb="0.5rem">
                Palestras fechadas
              </Heading>
              <Text fontSize="sm">
                Fontes de inspiração, motivação e mentoria para membros.
                Apresentamos um caminho alternativo para a carreira empresarial
                tradicional
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  );
}
