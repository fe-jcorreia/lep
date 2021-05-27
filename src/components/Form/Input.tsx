import {
  Input as ChakraInput,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { IconType } from "react-icons";

interface InputProps {
  type: string;
  icon: IconType;
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, icon, placeholder, ...rest },
  ref
) => {
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
        ref={ref}
        {...rest}
      />
    </InputGroup>
  );
};

export const Input = forwardRef(InputBase);
