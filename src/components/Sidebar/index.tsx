import { Box, Button, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <Box
      as="aside"
      h="100%"
      w="36%"
      min-w="96"
      bg="rgba( 0, 0, 0, 0.75 )"
      boxShadow="0 8px 32px 0 rgba( 0, 0, 0, 0.37 )"
      backdropFilter="blur( 7.5px )"
      position="absolute"
      right={0}
    >
      <Button
        as="button"
        w="20"
        h="20"
        borderRadius={0}
        position="absolute"
        right={0}
      >
        <Icon as={RiSearchLine} fontSize={32} />
      </Button>
    </Box>
  );
}
