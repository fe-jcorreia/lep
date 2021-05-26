import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function MainSwiper() {
  const projects = ["garagem", "dli", "ps", "evento", "podcast"];
  const headings = [
    "Garagem de Startups",
    "Desafio LEPoli de Inovação",
    "Processo Seletivo",
    "Palestras",
    "Pitch de Bar Podcast",
  ];
  const texts = [
    "Tire sua ideia do papel",
    "Participe do nosso hackaton e concorra a prêmios",
    "Participe da nossa família",
    "Palestras com grandes empreendedores do mercado",
    "Entenda de perto o backstage dos empreendedores",
  ];

  const slides = [];
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
            alt={`${projects[i]}`}
            w="100%"
            h="100%"
            objectFit="cover"
            filter="brightness(0.5)"
          />
          <Flex
            position="absolute"
            direction="column"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Heading fontSize={["4xl", "5xl"]} fontWeight="600" color="gray.50">
              {`${headings[i]}`}
            </Heading>
            <Text fontSize={["xl", "2xl"]} fontWeight="600" color="gray.200">
              {`${texts[i]}`}
            </Text>
          </Flex>
        </Link>
      </SwiperSlide>
    );
  }

  return (
    <Flex maxWidth="full" height="300px" mx="auto">
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
  );
}
