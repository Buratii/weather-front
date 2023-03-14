import { HStack, Text } from "@chakra-ui/react";

interface DetailProps {
  title: string;
  data: string | number;
}

export default function Detail({ title, data }: DetailProps) {
  return (
    <HStack justify="space-between">
      <Text color="gray.500">{title}</Text>
      <Text>{data}</Text>
    </HStack>
  );
}
