import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

export function Header() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex bg="white" boxShadow="sm" pos="sticky" top="0" as="header" zIndex="3">
      <Flex
        maxW={[
          '240px',
          "340px",
          "420px",
          "720px",
          "1080px",
        ]}
        mx="auto"
        h="5rem"
        w="100%"
        align="center"
        justify="space-between"
      >
        {isWideVersion ? (
          <>
            <Link href="/" align="center" w="8rem">
              <Image src="/img/logo.png" h="auto" w="100%" alt="logo" />
            </Link>
            <HStack align="center" spacing="2rem">
              <Link href="/sobre">Sobre nós</Link>
              <Link href="/time">Nosso time</Link>
              <Link href="/contato">Contato</Link>

              <Link href="/login" display="flex" ml="2rem" align="center">
                <Icon as={FiUser} mr="0.5rem" fontSize="1.5rem" />
                Login
              </Link>
            </HStack>{" "}
          </>
        ) : (
          <>
            <Link href="/" align="center" w="8rem">
              <Image src="/img/logo.png" h="auto" w="100%" alt="logo" />
            </Link>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<Icon as={AiOutlineMenu} />}
                aria-label="Options"
                variant="ghost"
              />
              <MenuList>
                <MenuItem>
                  <Link href="/sobre">Sobre nós</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/time">Nosso time</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/contato">Contato</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/login" display="flex" mt="1rem" align="center">
                    <Icon as={FiUser} mr="0.5rem" fontSize="1.5rem" />
                    Login
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>{" "}
          </>
        )}
      </Flex>
    </Flex>
  );
}
