import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Slides {
  image: string;
  title: string;
  description: string;
  key: string;
}

interface MainSwiperProps {
  slidesData: Slides[];
}

export function MainSwiper({ slidesData }: MainSwiperProps) {
  const slides = [];

  slides.push(
    slidesData.map((slide) => {
      return (
        <SwiperSlide
          key={`slide-${slide.key}`}
          tag="li"
          style={{ listStyle: "none" }}
        >
          <Link href={`/projetos`} align="center" justifyContent="center">
            <Image
              src={slide.image}
              alt={slide.key}
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
              <Heading
                fontSize={["4xl", "5xl"]}
                fontWeight="600"
                color="gray.50"
              >
                {slide.title}
              </Heading>
              <Text fontSize={["xl", "2xl"]} fontWeight="600" color="gray.200">
                {slide.description}
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
      );
    })
  );

  return (
    <Flex
      maxWidth="full"
      height="300px"
      mx="auto"
      borderBottomWidth="10px"
      borderColor="yellow.500"
    >
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
