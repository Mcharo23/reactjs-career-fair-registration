import { AppShell, Stack } from "@mantine/core";
import React, { useState } from "react";
import HomeHeader from "../../global/components/header";
import NavigationBar from "../../global/components/nav";
import { NAV_LINK } from "../../lib/enum";
import { useDisclosure } from "@mantine/hooks";
import Events from "./events";

const StudentPanel: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState<NAV_LINK>(NAV_LINK.EVENT);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <HomeHeader opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar maw={300}>
        <NavigationBar
          onClick={(nav: string) => {
            opened ? toggle() : null;
            if (Object.values(NAV_LINK).includes(nav as NAV_LINK)) {
              setActive(nav as NAV_LINK);
            }
          }}
          active={active}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack w={"100%"}>{active === NAV_LINK.EVENT && <Events />}</Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default StudentPanel;
