import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

interface Member {
  photo: string;
  name: string;
  description: string;
  linkedin: string;
}

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <Box w="250px" h="auto" align="center" overflow="hidden" boxShadow="2xl">
      <Image
        src={member.photo}
        w="100%"
        h="70%"
        alt="member-photo"
        objectFit="cover"
        borderRadius="5px 5px 0 0"
      />
      <Flex
        flexDir="column"
        h="30%"
        p="1rem"
        borderWidth="0 1px 1px 1px"
        borderRadius="0 0 5px 5px"
        borderColor="yellow.600"
      >
        <Heading fontSize="1xl" mb="0.25rem" alignSelf="self-start">
          {member.name}
        </Heading>

        <Text fontSize="sm" mb="0.5rem" alignSelf="self-start">
          {member.description}
        </Text>

        <Flex justify="space-between" align="center">
          <Button size="xs" variant="outline" colorScheme="blue">
            Saiba mais...
          </Button>
          <Link href={member.linkedin} isExternal>
            <Icon as={FaLinkedin} fontSize="1.5rem" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
