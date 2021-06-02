import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { MemberCard } from "./MemberCard";

interface Member {
  photo: string;
  name: string;
  description: string;
  linkedin: string;
}

interface TeamSectionProps {
  teamSectionName: string;
  teamSectionData: Member[];
  gridColumns: number;
}

export function TeamSection({
  teamSectionName,
  teamSectionData,
  gridColumns,
}: TeamSectionProps) {
  return (
    <Flex
      maxW="1080px"
      mx="auto"
      flexDir="column"
      my="5rem"
      align="center"
      justify="center"
    >
      <Heading
        alignSelf="self-start"
        borderBottom="2px"
        borderColor="yellow.500"
        mb="2rem"
      >
        {teamSectionName}
      </Heading>
      <SimpleGrid gap="1.5rem" columns={gridColumns}>
        {teamSectionData.map((member) => {
          return <MemberCard member={member} />;
        })}
      </SimpleGrid>
    </Flex>
  );
}
