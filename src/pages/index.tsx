import Sidebar from "@/components/Sidebar";
import { Weather } from "@/interfaces/weather";
import api from "@/services/api";
import { Box, Flex, HStack, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

interface HomeProps {
  weather: Weather;
}

export default function Home({ weather }: HomeProps) {
  return (
    <Flex
      direction="column"
      h="100vh"
      overflow="hidden"
      bgGradient="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/rain.jpg)"
      bgSize="100%"
    >
      <HStack
        position="absolute"
        bottom={24}
        left={24}
        userSelect="none"
        bg="red"
      >
        <Text fontSize={164} fontWeight="medium">
          {Math.round(weather.current.temp_c)}°
        </Text>
        <HStack>
          <Stack>
            <Text fontSize={64}>{weather.location.name}</Text>
            <Text>{weather.location.name}</Text>
          </Stack>
          <Stack align="center">
            <Img src={weather.current.condition.icon} />
            <Text>{weather.current.condition.text}</Text>
          </Stack>
        </HStack>
      </HStack>

      <Sidebar />
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps<{
  weather: Weather;
}> = async (context) => {
  const { data } = await api.get("&q=Criciuma");

  return {
    props: { weather: data },
  };
};
