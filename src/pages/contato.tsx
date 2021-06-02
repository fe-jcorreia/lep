import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ContactForm } from "../components/Form/ContactForm";
import { FiMapPin, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Contato() {
  return (
    <SimpleGrid maxW="1080px" mx="auto" gap="1.5rem" columns={[1, 2]}>
      <Flex flexDir="column" maxW="720px" mx="auto" p="2rem">
        <Heading fontSize="5xl" mb="1rem">
          Fale com a gente!
        </Heading>
        <Heading fontSize="1xl" mb="2rem">
          Nos nossos principais meios de comunicação
        </Heading>
        <Text fontWeight="500" mb="1rem">
          Pelas nossas redes sociais
        </Text>
        <HStack spacing="1rem" mb="2rem">
          <Link href="https://www.instagram.com/lepoliusp/?hl=pt-br" isExternal>
            <Icon as={FaInstagram} fontSize="6xl" />
          </Link>
          <Link href="https://www.facebook.com/lepoliusp" isExternal>
            <Icon as={FaFacebookSquare} fontSize="6xl" />
          </Link>
          <Link href="https://www.linkedin.com/company/lepoliusp" isExternal>
            <Icon as={FaLinkedin} fontSize="6xl" />
          </Link>
        </HStack>
        <Text fontWeight="500" mb="1rem">
          Ou nos contate por email
        </Text>
        <Button
          type="button"
          justifyContent="flex-start"
          variant="ghost"
          _hover={{ textDecoration: "none" }}
          w="fit-content"
          fontSize="sm"
          lineHeight="1.5rem"
          mb="1rem"
          px='0'
          onClick={() => {
            window.open("mailto:lepoliusp@gmail.com");
          }}
        >
          <Icon as={FiMail} fontSize="lg" mr="0.5rem" />
          lepoliusp@gmail.com
        </Button>
      </Flex>
      <ContactForm />
    </SimpleGrid>
  );
}
