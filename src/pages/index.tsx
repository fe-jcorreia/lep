import Head from "next/head";
import { MainSwiper } from "../components/Main/MainSwiper";
import { MainPresentation } from "../components/Main/MainPresentation";
import { MainProjects } from "../components/Main/MainProjects";
import { MainSponsors } from "../components/Main/MainSponsors";
import { Flex } from "@chakra-ui/react";
import { MainContactForm } from "../components/Main/MainContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Lepoli</title>
      </Head>

      <MainSwiper />

      <Flex
        flexDir="column"
        pos="relative"
        _before={{
          zIndex: "-1",
          content: '""',
          bgImage: "/img/bg.svg",
          bgRepeat: "no-repeat",
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: "0.08",
        }}
      >
        <MainPresentation />
        <MainProjects />
        <MainSponsors />
        <MainContactForm />
      </Flex>
    </>
  );
}