import { Group, Flex, Avatar, Burger, Text } from "@mantine/core";
import React from "react";
import logo from "../../assets/knowledge.png";
import { UserButton } from "./user-button";

type HomeHeaderProps = {
  opened: boolean;
  toggle: () => void;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ opened, toggle }) => {
  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Flex direction={"row"} align={"center"} justify={"center"} gap={"xs"}>
          <Avatar src={`${logo}`} alt="icon" radius="xl" />
          <Text size="xl">CFR</Text>
        </Flex>
      </Group>

      <Flex>
        <UserButton />
      </Flex>
    </Group>
  );
};

export default HomeHeader;
