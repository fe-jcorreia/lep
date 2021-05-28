import {
  Input as ChakraInput,
  Icon,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { IconType } from "react-icons";
import { FieldError } from "react-hook-form";

interface InputProps {
  type: string;
  icon: IconType;
  placeholder: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, icon, placeholder, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
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
          ref={ref}
          {...rest}
        />
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
