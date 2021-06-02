import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import Head from "next/head";
import { TeamSection } from "../components/Team/TeamSection";
import { PrismicTeamResponseFormatter } from "../formatters/PrismicTeamResponseFormatter";

interface Member {
  photo: string;
  name: string;
  description: string;
  linkedin: string;
}

interface TimeProps {
  presidency: Member[];
  direction: Member[];
  acceleration: Member[];
  humamResources: Member[];
  comunication: Member[];
  events: Member[];
}

export default function Time({
  presidency,
  direction,
  acceleration,
  humamResources,
  comunication,
  events,
}: TimeProps) {
  return (
    <>
      <Head>
        <title>Time | Lepoli</title>
      </Head>
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

      <TeamSection
        teamSectionName="Presidência"
        teamSectionData={presidency}
        gridColumns={1}
      />

      <TeamSection
        teamSectionName="Diretoria"
        teamSectionData={direction}
        gridColumns={4}
      />
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

  const {
    presidency,
    direction,
    acceleration,
    humamResources,
    comunication,
    events,
  } = PrismicTeamResponseFormatter(data);

  return {
    props: {
      presidency,
      direction,
      acceleration,
      humamResources,
      comunication,
      events,
    },
    revalidate: 30 * 60,
  };
};
