import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { FaLinkedin } from "react-icons/fa";

interface PrismicMember {
  memberphoto: { url: string };
  membername: { text: string }[];
  memberdescription: { text: string }[];
  linkedin: { url: string };
}

interface Member {
  photo: string;
  name: string;
  description: string;
  linkedin: string;
}

interface TimeProps {
  presidencia: Member;
  diretoria: Member[];
}

export default function Time({ presidencia, diretoria }: TimeProps) {
  return (
    <>
      <Flex flexDir="column" h="300px" w="100%" pos="relative">
        <Image
          src="/img/inovalab.jpg"
          alt="inova-lab"
          w="100%"
          h="100%"
          objectFit="cover"
          filter="opacity(0.2)"
        />
        <Flex
          position="absolute"
          direction="column"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Heading
            fontSize={["4xl", "5xl"]}
            fontWeight="600"
            color="blue.700"
            pb="1rem"
            borderBottom="2px"
            borderColor="yellow.500"
          >
            Nossas Pessoas
          </Heading>
        </Flex>
      </Flex>

      <Flex maxW="1080px" mx="auto" flexDir="column" my="5rem">
        <Heading mb="1rem">A organização</Heading>
        <Text textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Flex>

      <Flex
        maxW="1080px"
        mx="auto"
        flexDir="column"
        my="5rem"
        align="center"
        justify="center"
      >
        <Heading
          alignSelf="self-start"
          borderBottom="2px"
          borderColor="yellow.500"
          mb='2rem'
        >
          Presidência
        </Heading>
        <Box
          w="250px"
          h="auto"
          align="center"
          overflow="hidden"
          boxShadow="2xl"
        >
          <Image
            src={presidencia.photo}
            w="100%"
            h="70%"
            alt="member-photo"
            objectFit="cover"
            borderRadius="5px 5px 0 0"
          />
          <Flex
            flexDir="column"
            h="30%"
            p="1rem"
            borderWidth="0 1px 1px 1px"
            borderRadius="0 0 5px 5px"
            borderColor="yellow.600"
          >
            <Heading fontSize="1xl" mb="0.25rem" alignSelf="self-start">
              {presidencia.name}
            </Heading>

            <Text fontSize="sm" mb="0.5rem" alignSelf="self-start">
              {presidencia.description}
            </Text>

            <Flex justify="space-between" align="center">
              <Button size="xs" variant="outline" colorScheme="blue">
                Saiba mais...
              </Button>
              <Link href={presidencia.linkedin} isExternal>
                <Icon as={FaLinkedin} fontSize="1.5rem" />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Flex
        maxW="1080px"
        mx="auto"
        flexDir="column"
        my="5rem"
        align="center"
        justify="center"
      >
        <Heading
          alignSelf="self-start"
          borderBottom="2px"
          borderColor="yellow.500"
          mb='2rem'
        >
          Diretoria
        </Heading>
        <SimpleGrid gap="1.5rem" columns={4}>
          {diretoria.map((member) => {
            return (
              <Box
                w="250px"
                h="auto"
                align="center"
                overflow="hidden"
                boxShadow="2xl"
              >
                <Image
                  src={member.photo}
                  w="100%"
                  h="70%"
                  alt="member-photo"
                  objectFit="cover"
                  borderRadius="5px 5px 0 0"
                />
                <Flex
                  flexDir="column"
                  h="30%"
                  p="1rem"
                  borderWidth="0 1px 1px 1px"
                  borderRadius="0 0 5px 5px"
                  borderColor="yellow.600"
                >
                  <Heading fontSize="1xl" mb="0.25rem" alignSelf="self-start">
                    {member.name}
                  </Heading>

                  <Text fontSize="sm" mb="0.5rem" alignSelf="self-start">
                    {member.description}
                  </Text>

                  <Flex justify="space-between" align="center">
                    <Button size="xs" variant="outline" colorScheme="blue">
                      Saiba mais...
                    </Button>
                    <Link href={member.linkedin} isExternal>
                      <Icon as={FaLinkedin} fontSize="1.5rem" />
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.Predicates.at("document.type", "team"),
  ]);
  const data = response.results[0].data;
  //console.log(JSON.stringify(data, null, 2));

  const presidencia: Member = {
    photo: data.presidencia[0].memberphoto.url,
    name: data.presidencia[0].membername[0].text,
    description: data.presidencia[0].memberdescription[0].text,
    linkedin: data.presidencia[0].linkedin.url,
  };

  const diretoria = data.diretoria.map((member: PrismicMember) => {
    return {
      photo: member.memberphoto.url,
      name: member.membername[0].text,
      description: member.memberdescription[0].text,
      linkedin: member.linkedin.url,
    };
  });

  return {
    props: { presidencia, diretoria },
  };
};
