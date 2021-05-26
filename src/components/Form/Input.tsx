import {
  Input as ChakraInput,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface InputProps {
  type: string;
  icon: IconType;
  placeholder: string;
}

export function Input({ type, icon, placeholder }: InputProps) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={icon} color="gray.500" />}
      />
      <ChakraInput
        type={type}
        placeholder={placeholder}
        _hover={{ bgColor: "none" }}
        borderColor="gray.400"
      />
    </InputGroup>
  );
}
