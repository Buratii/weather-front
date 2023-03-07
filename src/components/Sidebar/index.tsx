import { Box, Button, Flex, HStack, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { extractColors } from "extract-colors";
import { Input } from "./Input";

export default function Sidebar() {
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
      <Flex>
        <HStack w="full" align="flex-end">
          <Input mx={16} placeholder="Another location" />

          <Button
            as="button"
            minW="24"
            minH="24"
            w="24"
            h="24"
            bg={imageColor}
            borderRadius={0}
            variant="unstyled"
          >
            <Icon as={RiSearchLine} fontSize={32} />
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
