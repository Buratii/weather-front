import Sidebar from "@/components/Sidebar";
import { Weather } from "@/interfaces/weather";
import api from "@/services/api";
import { Flex, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";

interface HomeProps {
  weather: Weather;
}

export default function Home({ weather }: HomeProps) {
  const [search, setSearch] = useState("Criciuma");
  const [historySearch, setHistorySearch] = useState<string[]>([]);

  useEffect(() => {
    const getWeather = async () => {
      const { data } = await api.get<Weather>(`&q=${search}`);

      setHistorySearch([...historySearch, data.location.name]);
    };

    getWeather();
  }, [search]);

  return (
    <Flex
      direction="column"
      h="100vh"
      overflow="hidden"
      bgGradient="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(images/rain.jpg)"
      bgSize="100%"
    >
      <HStack position="absolute" bottom={24} left={24} userSelect="none">
        <Text fontSize={164} fontWeight="medium">
          {Math.round(weather.current.temp_c)}°
        </Text>
        <Flex>
          <Stack>
            <Text fontSize={64}>{weather.location.name}</Text>
            <Text>
              {format(
                new Date(weather.location.localtime),
                "HH:mm - EEEE, dd MMM yy"
              )}
            </Text>
          </Stack>
          <Stack align="center" spacing={4} justify="flex-end">
            <Img src={weather.current.condition.icon} />
            <Text>{weather.current.condition.text}</Text>
          </Stack>
        </Flex>
      </HStack>

      <Sidebar />
    </Flex>
  );
}
