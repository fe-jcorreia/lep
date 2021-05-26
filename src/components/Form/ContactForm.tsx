import {
  Button,
  Checkbox,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FiPhone, FiMail, FiUser } from "react-icons/fi";
import { Input } from "./Input";

export function ContactForm() {
  return (
    <VStack
      as="form"
      w="100%"
      maxW="720px"
      mx="auto"
      borderRadius="10px"
      bg="white"
      p="2rem"
      spacing="1rem"
    >
      <Input type="name" placeholder="Nome" icon={FiUser} />
      <Input type="email" placeholder="Email" icon={FiMail} />
      <Input type="tel" placeholder="Celular" icon={FiPhone} />

      <VStack spacing="0.5rem" align="start" alignSelf="start">
        <Checkbox defaultIsChecked borderColor="gray.500">
          Prefiro conversar por Email
        </Checkbox>
        <Checkbox defaultIsChecked borderColor="gray.500">
          Prefiro conversar por Whatsapp
        </Checkbox>
        <Checkbox borderColor="gray.500">
          Quero receber notificações de eventos da Liga
        </Checkbox>
      </VStack>
      
      <Textarea
        placeholder="Digite sua mensagem"
        _hover={{ bgColor: "none" }}
        borderColor="gray.400"
        resize="none"
        h="12rem"
      />
      <Button w="30%" type="submit" mt="2rem" colorScheme="yellow">
        Enviar
      </Button>
    </VStack>
  );
}
