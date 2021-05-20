import { Flex, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { ReactNode } from "react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const projects = ["dli", "ps", "garagem"];

const projectNames = [
  "Desafio LEPoli de inovação",
  "Processo seletivo",
  "Garagem de startups",
];

const slides: ReactNode[] = [];
for (let i = 0; i < projects.length; i += 1) {
  slides.push(
    <SwiperSlide
      key={`slide-${projects[i]}`}
      tag="li"
      style={{ listStyle: "none" }}
    >
      <Link href={`/projetos`} align="center" justifyContent="center">
        <Image
          src={`/img/${projects[i]}.png`}
          w="100%"
          h="100%"
          objectFit="cover"
          alt={`${projects[i]}`}
        />
        <Text>{`${projectNames[i]}`}</Text>
      </Link>
    </SwiperSlide>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Lepoli</title>
      </Head>
      <Header />
      <Flex maxWidth="full" height="450px" mx="auto">
        <Swiper
          id="main"
          navigation={{ nextEl: null, prevEl: null }}
          pagination={{ clickable: true }}
          autoplay={{ disableOnInteraction: false, delay: 4000 }}
          tag="section"
          wrapperTag="ul"
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
      </Flex>
        
    </>
  );
}
