import {
  Input as ChakraInput,
  InputProps as ChakraInpuProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInpuProps {}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...rest }: InputProps,
  ref
) => {
  return <ChakraInput px={4} ref={ref} variant="flushed" {...rest} />;
};

export const Input = forwardRef(InputBase);
