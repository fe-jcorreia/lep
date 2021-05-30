import Head from "next/head";
import { MainSwiper } from "../components/Main/MainSwiper";
import { MainPresentation } from "../components/Main/MainPresentation";
import { MainProjects } from "../components/Main/MainProjects";
import { MainSponsors } from "../components/Main/MainSponsors";
import { Flex } from "@chakra-ui/react";
import { MainContactForm } from "../components/Main/MainContactForm";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

interface Slide {
  slide: { url: string };
  slidetitle: { text: string }[];
  slidedescription: { text: string }[];
  slidekey: string;
}

interface Sponsor {
  sponsor: { url: string };
  sponsorkey: string;
}

interface SlidesFormatted {
  image: string;
  title: string;
  description: string;
  key: string;
}

interface HomeProps {
  slides: SlidesFormatted[];
  sponsors: { sponsorLogo: string; key: string }[];
}

export default function Home({ slides, sponsors }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Lepoli</title>
      </Head>

      <MainSwiper slidesData={slides} />

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
        <MainSponsors sponsors={sponsors} />
        <MainContactForm />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.Predicates.at("document.type", "maincontent"),
  ]);
  const data = response.results[0].data;

  const slides: SlidesFormatted = data.swiperimages.map((slide: Slide) => {
    return {
      image: slide.slide.url,
      title: slide.slidetitle[0].text,
      description: slide.slidedescription[0].text,
      key: slide.slidekey,
    };
  });

  const sponsors = data.sponsors.map((sponsor: Sponsor) => {
    return {
      sponsorLogo: sponsor.sponsor.url,
      key: sponsor.sponsorkey,
    };
  });

  return {
    props: { slides, sponsors },
    revalidate: 30 * 60, // 30 minutes
  };
};
