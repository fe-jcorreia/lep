import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { FcSupport } from "react-icons/fc";

export function Maintenance() {
  return (
    <Flex my="9rem" align="center" justify="center" color='blue.800'>
      <Flex flexDir="column" w='40%'>
        <Heading fontSize="8xl">
          Oops!
        </Heading>
        <Heading fontSize="5xl">
          Em manutenção
        </Heading>
        <Text fontWeight='500' mt='2rem'>Nossos LEDevs estão trabalhando nisso no momento, volte mais tarde :)</Text>
      </Flex>
      <Image src={"/img/maintenance.png"} alt="manutencao" />
    </Flex>
  );
}
