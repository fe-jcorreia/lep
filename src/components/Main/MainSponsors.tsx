import {
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

interface MainSponsorsProps {
  sponsors: { sponsorLogo: string; key: string }[];
}

export function MainSponsors({ sponsors }: MainSponsorsProps) {
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
        {sponsors.map((sponsor) => {
          return (
            <Center key={sponsor.key}>
              <Image src={sponsor.sponsorLogo} alt={`logo-${sponsor.key}`} />
            </Center>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
