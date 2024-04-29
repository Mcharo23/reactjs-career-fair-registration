import React, { useState } from "react";
import ugali_maharage from "../../../../assets/Ugali maharage.jpeg";
import chipsi_yai from "../../../../assets/chipsi yai.jpg";
import kuku_kukaanga from "../../../../assets/kuku wa kukaanga.jpg";
import makange_kuku from "../../../../assets/makange kuku.jpg";
import kuku_rosti from "../../../../assets/kuku roste.jpg";
import ugali_nyama from "../../../../assets/Ugali nyama.jpg";
import wali_maharage from "../../../../assets/wali maharage.jpg";
import wali_makange_nyama from "../../../../assets/wali makange nyama.jpeg";
import wali_samaki from "../../../../assets/wali samaki.jpeg";
import useRandomNumberGenerator from "../../../../global/function/random-number-generator";
import {
  Avatar,
  Badge,
  Divider,
  Group,
  Menu,
  Paper,
  Space,
  Table,
  Title,
} from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { color } from "../../../../lib/colors";
import { DAY_ROUTINE, STATUS } from "../../../../lib/enum";
import SelectDayRoutine from "../../../../global/components/day-routine-select";

type menuType = {
  imageUrl: string;
  name: string;
  price: string;
  status: string;
};

const MenuTable: React.FC = () => {
  const { menuPriceGenerator } = useRandomNumberGenerator();
  const [dayRoutine, setDayRoutine] = useState<DAY_ROUTINE>(
    DAY_ROUTINE.MORNING
  );

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const menu: menuType[] = [
    {
      imageUrl: ugali_maharage,
      name: "Ugali Maharage",
      price: menuPriceGenerator(),
      status: STATUS.AVAILABLE,
    },
    {
      imageUrl: chipsi_yai,
      name: "Chipsi Yai",
      price: menuPriceGenerator(),
      status: STATUS.NOT_AVAILABLE,
    },
    {
      imageUrl: kuku_kukaanga,
      name: "Kuku wa Kukaanga",
      price: menuPriceGenerator(),
      status: STATUS.AVAILABLE,
    },
    {
      imageUrl: makange_kuku,
      name: "Makange Kuku",
      price: menuPriceGenerator(),
      status: STATUS.AVAILABLE,
    },
    {
      imageUrl: kuku_rosti,
      name: "Kuku Rosti",
      price: menuPriceGenerator(),
      status: STATUS.NOT_AVAILABLE,
    },
    {
      imageUrl: ugali_nyama,
      name: "Ugali Nyama",
      price: menuPriceGenerator(),
      status: STATUS.AVAILABLE,
    },
    {
      imageUrl: wali_maharage,
      name: "Wali Maharage",
      price: menuPriceGenerator(),
      status: STATUS.NOT_AVAILABLE,
    },
    {
      imageUrl: wali_makange_nyama,
      name: "Wali Makange Nyama",
      price: menuPriceGenerator(),
      status: STATUS.AVAILABLE,
    },
    {
      imageUrl: wali_samaki,
      name: "Wali Samaki",
      price: menuPriceGenerator(),
      status: STATUS.AVAILABLE,
    },
  ];

  const row = menu
    .filter((f) => f.status === STATUS.NOT_AVAILABLE)
    .map((m, index) => (
      <Table.Tr
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor:
            hoveredItem === index ? color.semi_transparent_blue : color.white,
        }}
      >
        <Table.Td>
          <Avatar src={m.imageUrl} radius="md" size={"lg"} />
        </Table.Td>
        <Table.Td>{m.name}</Table.Td>
        <Table.Td>{m.price} Tshs</Table.Td>
        <Table.Td>
          {m.status === STATUS.AVAILABLE ? (
            <Badge bg={`${color.green}`} w={120} py={"xs"}>
              {m.status}
            </Badge>
          ) : (
            <Badge bg={`${color.red}`} w={120} py={"xs"}>
              {m.status}
            </Badge>
          )}
        </Table.Td>
      </Table.Tr>
    ));

  return (
    <Paper p={"md"} shadow="md" w={"100%"} radius={"md"}>
      <Group justify="space-between">
        <Group>
          <Title order={2} c={`${color.blue_950}`}>
            Menu
          </Title>
          <Divider orientation="vertical" size={"lg"} />
          <Title order={3} c={`${color.dimmed}`}>
            {dayRoutine}
          </Title>
        </Group>
        <Menu position="bottom" withArrow width={200} shadow="md">
          <Menu.Target>
            <IconDots />
          </Menu.Target>

          <Menu.Dropdown>
            <SelectDayRoutine
              placeholder=""
              error={null}
              variant="filled"
              label="Filter"
              value={dayRoutine}
              onChange={setDayRoutine}
            />
          </Menu.Dropdown>
        </Menu>
      </Group>

      <Space h={"md"} />

      {/* TABLE */}

      <Table.ScrollContainer minWidth={700} type="scrollarea" mah={380}>
        <Table horizontalSpacing="md" verticalSpacing="xs" layout="fixed">
          <Table.Tbody>
            <Table.Tr>
              <Table.Th>Preview</Table.Th>
              <Table.Th>Food Name</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Tbody>
          <Table.Tbody>{row}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
};

export default MenuTable;
