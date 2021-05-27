import { Button, Checkbox, Textarea, VStack } from "@chakra-ui/react";
import { FiPhone, FiMail, FiUser } from "react-icons/fi";
import { Input } from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";

interface SendMessageFormData {
  name: string;
  email: string;
  tel: string;
  call_back_by_email: boolean;
  call_back_by_whatsapp: boolean;
  receive_notifications: false;
  message: string;
}

export function ContactForm() {
  const { register, handleSubmit, formState } = useForm();
  const errors = formState.errors;

  const handleSendMessage: SubmitHandler<SendMessageFormData> = async (
    values,
    event
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(handleSendMessage)}
      w="100%"
      maxW="720px"
      mx="auto"
      borderRadius="10px"
      bg="white"
      p="2rem"
      spacing="1rem"
    >
      <Input
        type="name"
        placeholder="Nome"
        icon={FiUser}
        {...register("name")}
      />
      <Input
        type="email"
        placeholder="Email"
        icon={FiMail}
        {...register("email")}
      />
      <Input
        type="tel"
        placeholder="Celular"
        icon={FiPhone}
        {...register("tel")}
      />

      <VStack spacing="0.5rem" align="start" alignSelf="start">
        <Checkbox
          defaultIsChecked
          borderColor="gray.500"
          {...register("call_back_by_email")}
        >
          Prefiro conversar por Email
        </Checkbox>
        <Checkbox
          defaultIsChecked
          borderColor="gray.500"
          {...register("call_back_by_whatsapp")}
        >
          Prefiro conversar por Whatsapp
        </Checkbox>
        <Checkbox borderColor="gray.500" {...register("receive_notifications")}>
          Quero receber notificações de eventos da Liga
        </Checkbox>
      </VStack>

      <Textarea
        placeholder="Digite sua mensagem"
        _hover={{ bgColor: "none" }}
        borderColor="gray.400"
        resize="none"
        h="12rem"
        {...register("message")}
      />
      <Button
        w="30%"
        type="submit"
        mt="2rem"
        colorScheme="yellow"
        isLoading={formState.isSubmitting}
      >
        Enviar
      </Button>
    </VStack>
  );
}
