import {
  Box,
  Image,
  Flex,
  Heading,
  HStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainSwiper } from "../components/MainSwiper";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Lepoli</title>
      </Head>
      <Header />
      <MainSwiper />

      <Flex
        maxW="720px"
        mx="auto"
        py="4rem"
        direction="column"
        textAlign="center"
      >
        <Heading fontSize="4xl" fontWeight="700" mb="1rem">
          Somos a Liga de Empreendedorismo da Poli
        </Heading>
        <Text fontSize="xl" fontWeight="500">
          Temos como missão <strong>inspirar</strong>, <strong>conectar</strong>{" "}
          e <strong>capacitar</strong> futuros empreendedores e empreededoras da
          POLI
        </Text>
      </Flex>

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

      <Flex maxW="1080px" mx="auto">
        <HStack spacing="5rem" column={3} mb="4rem">
          <Box
            maxW="sm"
            overflow="hidden"
            bg="gray.50"
            h="400px"
            w="300px"
            mx="auto"
            borderRadius="10px 10px 0 0"
          >
            <Image
              src="/img/garagem-card.png"
              w="100%"
              h="60%"
              alt="garagem-card"
            />
            <Box
              px="2rem"
              py="1rem"
              w="100%"
              h="40%"
              borderWidth="0 1px 1px 1px"
              borderColor="gray.400"
              borderRadius="0 0 10px 10px"
            >
              <Heading fontSize="lg" mb="0.5rem">
                Garagem de Startups
              </Heading>
              <Text fontSize="sm">
                Criação de um projeto real utilizando os famosos métodos de
                desenvolvimento de produtos em startups.
              </Text>
            </Box>
          </Box>
          <Box
            maxW="sm"
            overflow="hidden"
            bg="gray.50"
            h="400px"
            w="300px"
            mx="auto"
            borderRadius="10px 10px 0 0"
          >
            <Image
              src="/img/garagem-card.png"
              w="100%"
              h="60%"
              alt="garagem-card"
            />
            <Box
              px="2rem"
              py="1rem"
              w="100%"
              h="40%"
              borderWidth="0 1px 1px 1px"
              borderColor="gray.400"
              borderRadius="0 0 10px 10px"
            >
              <Heading fontSize="lg" mb="0.5rem">
                Garagem de Startups
              </Heading>
              <Text fontSize="sm">
                Criação de um projeto real utilizando os famosos métodos de
                desenvolvimento de produtos em startups.
              </Text>
            </Box>
          </Box>
          <Box
            maxW="sm"
            overflow="hidden"
            bg="gray.50"
            h="400px"
            w="300px"
            mx="auto"
            borderRadius="10px 10px 0 0"
          >
            <Image
              src="/img/garagem-card.png"
              w="100%"
              h="60%"
              alt="garagem-card"
            />
            <Box
              px="2rem"
              py="1rem"
              w="100%"
              h="40%"
              borderWidth="0 1px 1px 1px"
              borderColor="gray.400"
              borderRadius="0 0 10px 10px"
            >
              <Heading fontSize="lg" mb="0.5rem">
                Garagem de Startups
              </Heading>
              <Text fontSize="sm">
                Criação de um projeto real utilizando os famosos métodos de
                desenvolvimento de produtos em startups.
              </Text>
            </Box>
          </Box>
        </HStack>
      </Flex>

      <Footer />
    </>
  );
}
