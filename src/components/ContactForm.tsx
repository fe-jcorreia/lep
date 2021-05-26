import { Checkbox, Flex, Input, Stack, Textarea } from "@chakra-ui/react";

export function ContactForm() {
  return (
    <Stack>
      <Input placeholder="Nome" variant="flushed" />
      <Input placeholder="Email" variant="flushed" />
      <Input placeholder="Celular" variant="flushed" />
      <Checkbox defaultIsChecked>Prefiro conversar por Email</Checkbox>
      <Checkbox defaultIsChecked>Prefiro conversar por Whatsapp</Checkbox>
      <Textarea placeholder="Digite sua mensagem" variant="flushed" />
    </Stack>
  );
}
