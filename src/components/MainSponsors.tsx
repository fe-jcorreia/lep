import {
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export function MainSponsors() {
  return (
    <Flex
      maxW="1080px"
      mx="auto"
      py="4rem"
      mt="4rem"
      align="center"
      justify="center"
      flexDir="column"
    >
      <Flex
        maxW="1080px"
        mx="auto"
        w="50%"
        align="center"
        direction="column"
        py="4rem"
        borderTop="1px"
        textAlign="center"
      >
        <Heading fontSize="4xl" fontWeight="700" mb="1rem">
          Nossos Apoiadores
        </Heading>
        <Text fontSize="xl" fontWeight="500">
          Conheça as entidades que compraram nosso sonho
        </Text>
      </Flex>

      <SimpleGrid gap="5rem" columns={4} align="center" justify="center">
        <Center>
          <Image src="/img/logoTalent.svg" alt="logo-talent" />
        </Center>
        <Center>
          <Image
            src="/img/logoFundacaoEstudar.svg"
            alt="logo-fundacao-estudar"
          />
        </Center>
        <Center>
          <Image src="/img/logoBTC.svg" alt="logo-BTC" />
        </Center>
        <Center>
          <Image src="/img/logoCodecraft.svg" alt="logo-codecraft" />
        </Center>
      </SimpleGrid>
    </Flex>
  );
}
