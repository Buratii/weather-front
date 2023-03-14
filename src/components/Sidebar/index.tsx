import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { extractColors } from "extract-colors";
import { Input } from "./Input";
import Detail from "../Detail";
import { Weather } from "@/interfaces/weather";

interface SidebarProps {
  weather: Weather;
  search: (value: string) => Promise<void>;
  history?: string[];
}

export default function Sidebar({ history, search, weather }: SidebarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageColor, setImageColor] = useState("");

  useEffect(() => {
    const functionTeste = async () => {
      const imageColorExtracted = await extractColors("images/rain.jpg", {
        distance: 1,
        splitPower: 2,
      });

      setImageColor(imageColorExtracted[0].hex);
    };

    functionTeste();
  }, []);

  return (
    <Box
      as="aside"
      h="100%"
      w="36%"
      min-w="96"
      bg="rgba( 0, 0, 0, 0.7 )"
      boxShadow="0 8px 32px 0 rgba( 0, 0, 0, 0.37 )"
      backdropFilter="blur( 7.5px )"
      position="absolute"
      right={0}
    >
      <Flex flexDir="column">
        <HStack w="full" h="100vh" align="flex-start">
          <Stack w="full" mx="16" py="14">
            <Input ref={inputRef} placeholder="Another location" />

            <Stack minH="80">
              {history
                ?.slice(0)
                .reverse()
                .map((location) => (
                  <Button
                    key={location}
                    variant="ghost"
                    color="gray.500"
                    fontWeight="normal"
                    colorScheme="gray"
                    justifyContent="flex-start"
                    borderRadius={0}
                    onClick={() => search(location)}
                    _hover={{
                      opacity: 0.4,
                    }}
                  >
                    {location}
                  </Button>
                ))}
            </Stack>

            <Divider />

            <Stack minH="96" py="4" justify="space-between" userSelect="none">
              <Text fontSize="sm" my={12} fontWeight="medium">
                Weather Details
              </Text>
              <Detail title="Cloudy" data={`${weather.current.cloud}%`} />
              <Detail title="Humidity" data={`${weather.current.humidity}%`} />
              <Detail title="Wind" data={`${weather.current.wind_kph}km/h`} />
              <Detail title="Rain" data={`${weather.current.cloud}mm`} />
            </Stack>

            <Divider />
          </Stack>

          <Button
            as="button"
            minW="24"
            minH="24"
            w="24"
            h="24"
            bg={imageColor}
            borderRadius={0}
            variant="unstyled"
            onClick={() => {
              search(inputRef?.current?.value ?? "");
            }}
          >
            <Icon as={RiSearchLine} fontSize={32} />
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
