import {
  Flex,
  Image,
  Text,
  Heading,
  Box,
  Icon,
  HStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { Maintenance } from "../components/Maintenance";
import { GiConqueror } from "react-icons/gi";
import { IoTelescopeSharp } from "react-icons/io5";
import { FaBalanceScale } from "react-icons/fa";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre | Lepoli</title>
      </Head>

      <Flex flexDir="column" h="300px" w="100%" pos="relative">
        <Image
          src="/img/inovalab.jpg"
          alt="inova-lab"
          w="100%"
          h="100%"
          objectFit="cover"
          filter="opacity(0.2)"
        />
        <Flex
          position="absolute"
          direction="column"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Heading
            fontSize={["4xl", "5xl"]}
            fontWeight="600"
            color="blue.700"
            pb="1rem"
            borderBottom="2px"
            borderColor="yellow.500"
          >
            Sobre a Liga
          </Heading>
        </Flex>
      </Flex>

      <Flex maxW="1080px" mx="auto" flexDir="column" my="5rem">
        <Heading mb="1rem">Um pouco da nossa história</Heading>
        <Text textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Flex>

      <Flex maxW="1080px" mx="auto" my="5rem" justify="space-between">
        <Flex w="45%" align="center" justify="center">
          <Icon
            as={GiConqueror}
            fontSize="10rem"
            color="yellow.600"
            mr="1rem"
          />
          <Flex flexDir="column">
            <Heading
              fontSize="3xl"
              mb="0.5rem"
              borderBottom="2px"
              borderColor="yellow.600"
            >
              Missão
            </Heading>
            <Text ml="1rem">
              Formar Empreendedores e Empreendedoras na POLI com base em 3
              pilares: Inspiração, Conexão e Capacitação
            </Text>
          </Flex>
        </Flex>
        <Flex w="45%" align="center" justify="center">
          <Icon
            as={IoTelescopeSharp}
            fontSize="10rem"
            color="yellow.600"
            mr="1rem"
          />
          <Flex flexDir="column">
            <Heading
              fontSize="3xl"
              mb="0.5rem"
              borderBottom="2px"
              borderColor="yellow.600"
            >
              Visão
            </Heading>
            <Text ml="1rem">
              Tornar-se referência no Ecossistema de Empreendedorismo e
              construir uma Comunidade de Empreendedores
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex maxW="1080px" mx="auto" my="5rem" align="center" justify="center">
        <Flex w="45%" align="center" justify="center">
          <Icon
            as={FaBalanceScale}
            fontSize="10rem"
            color="yellow.600"
            mr="1rem"
          />
          <Flex flexDir="column">
            <Heading
              fontSize="3xl"
              mb="0.5rem"
              borderBottom="2px"
              borderColor="yellow.600"
            >
              Valores
            </Heading>
            <Text ml="1rem">
              Amizade, Sonho Grande, Foco em Resultado, No Bulshit, Mente Aberta
              e Sentimento de Dono.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex maxW="1080px" mx="auto" flexDir="column" my="5rem">
        <Heading mb="1rem">Estrutura Interna</Heading>
        <Text textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Flex>
    </>
  );
}
