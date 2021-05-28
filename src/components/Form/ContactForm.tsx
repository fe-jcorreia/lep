import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FiPhone, FiMail, FiUser } from "react-icons/fi";
import { Input } from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

interface SendMessageFormData {
  name: string;
  email: string;
  tel: string;
  call_back_by_email: boolean;
  call_back_by_whatsapp: boolean;
  receive_notifications: false;
  message: string;
}

const signInForSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório").trim(),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Precisa ser um email válido")
    .trim(),
  tel: yup.string().trim(),
  message: yup.string().required("Mensagem obrigatória").trim(),
});

export function ContactForm() {
  const toast = useToast();
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(signInForSchema),
  });
  const errors = formState.errors;

  const handleSendMessage: SubmitHandler<SendMessageFormData> = async (
    values
  ) => {
    toast({
      title: "Mensagem enviada",
      description: "Retornaremos assim que possível",
      status: "success",
      position: "top-right",
      duration: 5000,
      isClosable: true,
    });
    reset();
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
        error={errors.name}
        {...register("name")}
      />
      <Input
        type="email"
        placeholder="Email"
        icon={FiMail}
        error={errors.email}
        {...register("email")}
      />
      <Input
        type="tel"
        placeholder="Celular"
        icon={FiPhone}
        error={errors.tel}
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

      <FormControl isInvalid={errors.message}>
        <Textarea
          placeholder="Digite sua mensagem"
          _hover={{ bgColor: "none" }}
          borderColor="gray.400"
          resize="none"
          h="12rem"
          {...register("message")}
        />
        {!!errors.message && (
          <FormErrorMessage>{errors.message.message}</FormErrorMessage>
        )}
      </FormControl>
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
