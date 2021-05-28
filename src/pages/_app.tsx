import { ChakraProvider, Skeleton } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { theme } from "../styles/theme";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "swiper/swiper-bundle.css";
import "../styles/swiperStyles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
