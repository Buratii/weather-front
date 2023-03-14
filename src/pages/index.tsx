import Sidebar from "@/components/Sidebar";
import { Weather } from "@/interfaces/weather";
import api from "@/services/api";
import { Flex, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import { useState } from "react";

interface HomeProps {
  initialWeather: Weather;
}

export default function Home({ initialWeather }: HomeProps) {
  const [weather, setWeather] = useState<Weather>(initialWeather);
  const [historySearch, setHistorySearch] = useState<string[]>([]);

  const getWeather = async (search: string) => {
    try {
      const query = search.normalize("NFD").replace(/\p{Diacritic}/gu, "");

      const alreadySearched = historySearch.find((location) =>
        location.match(query)
      );

      const { data } = await api.get<Weather>(`&q=${search}`);

      setWeather(data);

      const local = data.location.name
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");

      if (!alreadySearched) {
        setHistorySearch([...historySearch, local]);

        if (historySearch.length === 4) {
          historySearch.shift();
          setHistorySearch([...historySearch, local]);
        }
      }
    } catch (error) {
      throw new Error("Unable to consume api.");
    }
  };

  return (
    <Flex
      direction="column"
      h="100vh"
      w="100vw"
      overflow="hidden"
      bgGradient="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(images/rain.jpg)"
      objectFit="cover"
      bgRepeat="no-repeat"
    >
      <HStack position="absolute" bottom={24} left={24} userSelect="none">
        <Text fontSize={164} fontWeight="medium">
          {Math.round(weather?.current.temp_c)}°
        </Text>
        <Flex>
          <Stack>
            <Text fontSize={64}>{weather?.location.name}</Text>
            <Text>
              {format(
                new Date(weather?.location.localtime),
                "HH:mm - EEEE, dd MMM yy"
              )}
            </Text>
          </Stack>
          <Stack align="center" mx="4" spacing={4} justify="flex-end">
            <Img src={weather?.current.condition.icon} />
            <Text>{weather?.current.condition.text}</Text>
          </Stack>
        </Flex>
      </HStack>

      <Sidebar search={getWeather} history={historySearch} weather={weather} />
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps<{
  initialWeather: Weather;
}> = async (context) => {
  const { data } = await api.get<Weather>(`&q=Criciuma`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return {
    props: {
      initialWeather: data,
    },
  };
};
