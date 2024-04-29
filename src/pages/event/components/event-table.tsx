import {
  Table,
  UnstyledButton,
  Group,
  Center,
  rem,
  keys,
  Flex,
  Paper,
  TextInput,
  Text,
  Anchor,
  ActionIcon,
} from "@mantine/core";
import {
  IconChevronUp,
  IconChevronDown,
  IconSelector,
  IconSearch,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { color } from "../../../lib/colors";
import classes from "../../../global/css/TableSort.module.css";
import { EventType } from "../../../lib/type";

type EventTableProps = {
  eventData: EventType[];
};

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: EventType[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => {
      const value = item[key];
      if (typeof value === "string") {
        return value.toLowerCase().includes(query);
      }
      return false;
    })
  );
}

function sortData(
  data: EventType[],
  payload: {
    sortBy: keyof EventType | null;
    reversed: boolean;
    search: string;
  }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return payload.reversed
          ? bValue.localeCompare(aValue)
          : aValue.localeCompare(bValue);
      }

      return 0;
    }),
    payload.search
  );
}

//   MAIN FUNCTION
const EventTable: React.FC<EventTableProps> = ({ eventData }) => {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(eventData);
  const [sortBy, setSortBy] = useState<keyof EventType | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    setSortedData(eventData);
  }, [eventData]);

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const setSorting = (field: keyof EventType) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(eventData, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(eventData, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    );
  };

  const rows = sortedData.map((row: EventType, index) => (
    <Table.Tr
      key={row.eventId}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor:
          hoveredItem === index ? color.semi_transparent_blue : color.white,
      }}
    >
      <Table.Td>{row.eventName}</Table.Td>
      <Table.Td>
        <Anchor fz="sm">{row.eventType}</Anchor>
      </Table.Td>
      <Table.Td>{row.eventDate}</Table.Td>
      <Table.Td>{row.eventTime}</Table.Td>
      <Table.Td>{row.location}</Table.Td>
      <Table.Td c={`${color.green}`}>{String(row.numAttendees)}</Table.Td>
      <Table.Td>
        <Group>
          <ActionIcon variant="light" size={"lg"}>
            <IconEdit style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>

          <ActionIcon variant="light" c={`${color.red}`} size={"lg"}>
            <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <Paper p={30} radius="md" shadow="sm">
        <Flex justify="space-between" gap={"md"}>
          <TextInput
            placeholder="Search by any field"
            mb="md"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            value={search}
            onChange={handleSearchChange}
            w={{ base: "100%", sm: "100%", md: "60%", lg: "50%", xl: "40%" }}
          />
        </Flex>
        <Table.ScrollContainer minWidth={1500} type="native">
          <Table horizontalSpacing="md" verticalSpacing="xs" layout="fixed">
            <Table.Tbody>
              <Table.Tr bg={`${color.blue_100}`}>
                <Th
                  sorted={sortBy === "eventName"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("eventName")}
                >
                  Event name
                </Th>
                <Th
                  sorted={sortBy === "eventType"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("eventType")}
                >
                  Event type
                </Th>
                <Th
                  sorted={sortBy === "eventDate"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("eventDate")}
                >
                  Event date
                </Th>
                <Th
                  sorted={sortBy === "eventTime"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("eventTime")}
                >
                  Event time
                </Th>

                <Th
                  sorted={sortBy === "location"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("location")}
                >
                  Location
                </Th>
                <Th
                  sorted={sortBy === "numAttendees"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("numAttendees")}
                >
                  Attendence
                </Th>
                <Th sorted={false} reversed={false} onSort={() => {}}>
                  Actions
                </Th>
              </Table.Tr>
            </Table.Tbody>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>
    </div>
  );
};

export default EventTable;
