import { HStack, Text, StackProps } from "@chakra-ui/react";

interface DetailProps extends StackProps {
  title: string;
  data: string | number;
}

export default function Detail({ title, data, ...rest }: DetailProps) {
  return (
    <HStack justify="space-between" {...rest}>
      <Text color="gray.500" fontSize={["2xl", "md"]}>
        {title}
      </Text>
      <Text fontSize={["2xl", "md"]}>{data}</Text>
    </HStack>
  );
}
