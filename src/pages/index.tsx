import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainSwiper } from "../components/MainSwiper";
import { MainPresentation } from "../components/MainPresentation";
import { MainProjects } from "../components/MainProjects";
import { MainSponsors } from "../components/MainSponsors";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { ContactForm } from "../components/ContactForm";
import { MainContactForm } from "../components/MainContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Lepoli</title>
      </Head>
      <Header />
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
          opacity: "0.07",
        }}
      >
        <MainPresentation />
        <MainProjects />
      </Flex>

      <MainSponsors />

      <MainContactForm />

      <Footer />
    </>
  );
}
