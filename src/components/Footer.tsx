import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FiMapPin, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <Flex
      bg="blue.900"
      as="footer"
      flexDir="column"
      align="center"
      justify="center"
    >
      <Flex
        maxW="1080px"
        mx="auto"
        py="3rem"
        h="20rem"
        w="100%"
        align="center"
        justify="space-between"
      >
        <Flex h="100%" color="white">
          <HStack spacing="5rem">
            <Box w="4%" h="100%">
              <Image
                src="/img/icon-bluebg.png"
                w="100%"
                h="auto"
                alt="logo-icon"
              />
            </Box>
            <Box w="20%" textAlign="justify" h="100%">
              <Heading fontSize="lg" mb="1rem" borderBottom="1px">
                Sobre nós
              </Heading>
              <Text fontSize="sm">
                A Liga de Empreendedorismo da Poli foi fundada em dezembro de
                2019. Nossa principal missão é sermos vetores de criação de um
                ecossistema empreendedor dentro da Poli, assim como, das futuras
                grandes inovações brasileiras.
              </Text>
            </Box>
            <Box w="25%" textAlign="justify" h="100%">
              <Heading fontSize="lg" mb="1rem" borderBottom="1px">
                Informações
              </Heading>
              <Text fontSize="sm" lineHeight="1.5rem">
                <Icon as={FiMapPin} fontSize="lg" mr="0.5rem" />
                Escola Politécnica da USP
                <br /> Av. Prof. Luciano Gualberto, 380 <br />
                Butantã, São Paulo - SP
              </Text>
            </Box>
            <Box w="25%" textAlign="justify" h="100%">
              <Heading fontSize="lg" mb="1rem" borderBottom="1px">
                Contato
              </Heading>
              <Button
                type="button"
                justifyContent="flex-start"
                variant="ghost"
                _hover={{ textDecoration: "none" }}
                w="fit-content"
                fontSize="sm"
                lineHeight="1.5rem"
                mb="1rem"
                px="0"
                onClick={() => {
                  window.open("mailto:lepoliusp@gmail.com");
                }}
              >
                <Icon as={FiMail} fontSize="lg" mr="0.5rem" />
                lepoliusp@gmail.com
              </Button>
              <HStack spacing="0.5rem">
                <Link
                  href="https://www.instagram.com/lepoliusp/?hl=pt-br"
                  isExternal
                >
                  <Icon as={FaInstagram} fontSize="4xl" />
                </Link>
                <Link href="https://www.facebook.com/lepoliusp" isExternal>
                  <Icon as={FaFacebookSquare} fontSize="4xl" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/lepoliusp"
                  isExternal
                >
                  <Icon as={FaLinkedin} fontSize="4xl" />
                </Link>
              </HStack>
            </Box>
          </HStack>
        </Flex>
      </Flex>
      <Text color="white" mb="2rem">
        Liga de Empreendedorismo da POLI | Todos os direitos reservados |
        Desenvolvido por LEPOLI-USP
      </Text>
    </Flex>
  );
}
