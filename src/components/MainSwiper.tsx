import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { ReactNode } from "react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const projects = ["dli", "ps", "garagem"];

const headings = [
  "Desafio LEPoli de inovação",
  "Processo seletivo",
  "Garagem de startups",
];

const texts = [
  "Participe do hackaton lepoli de inovação dos dias 22 a 26 de junho",
  "Conheça nosso projeto",
  "Conheça nosso projeto",
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
          filter="brightness(0.5)"
        />
        <Flex
          position="absolute"
          direction="column"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Heading
            fontSize="5xl"
            fontWeight="700"
            color="gray.50"
          >{`${headings[i]}`}</Heading>
          <Text
            fontSize="sxl"
            fontWeight="500"
            color="gray.200"
          >{`${texts[i]}`}</Text>
        </Flex>
      </Link>
    </SwiperSlide>
  );
}

export function MainSwiper() {
  return (
    <Flex maxWidth="full" height="300px" mx="auto">
      <Swiper
        id="main"
        navigation={{ nextEl: null, prevEl: null }}
        pagination={{ clickable: true }}
        autoplay={{ disableOnInteraction: false, delay: 5000 }}
        tag="section"
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
    </Flex>
  );
}
