import React, { useEffect, useState } from "react";
import { STAFF_DATA, STAFF_DATA_TYPE } from "../staff-data";
import {
  Anchor,
  Avatar,
  Badge,
  Flex,
  Paper,
  Space,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { color } from "../../../../lib/colors";
import { STATUS } from "../../../../lib/enum";

type StaffInformationProps = {
  data: { email: string | null | undefined };
};

const StaffInformation: React.FC<StaffInformationProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string | null>("OverView");
  const [selectedStaff, setSelectedStaff] = useState<STAFF_DATA_TYPE | null>(
    null
  );

  useEffect(() => {
    const staff = STAFF_DATA.find((staff) => staff.email === data.email);
    if (staff) {
      setSelectedStaff(staff);
    }
  }, [data.email]);

  return (
    <div>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="start"
        gap={"md"}
      >
        <Paper shadow="xs" radius={"md"} p={"md"} w={{ base: "100%" }}>
          <Flex
            direction={"column"}
            gap={"md"}
            justify={"center"}
            align={"center"}
          >
            <Avatar src={selectedStaff?.passport} radius={"xl"} size={200} />
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Title order={2} c={`${color.blue_950}`}>
                {selectedStaff?.name}
              </Title>
              <Text
                c={`${color.dimmed}`}
                style={{
                  whiteSpace: "pre-line",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {selectedStaff?.course}
              </Text>
            </div>
          </Flex>
        </Paper>

        <Paper shadow="xs" radius={"md"} p={"md"} w={{ base: "100%" }}>
          <Tabs
            value={activeTab}
            onChange={setActiveTab}
            color={`${color.blue_800}`}
            variant="default"
          >
            <Tabs.List c={`${color.blue_500}`}>
              <Tabs.Tab value="OverView">OverView </Tabs.Tab>
            </Tabs.List>

            <Space h={"md"} />

            <Tabs.Panel value="OverView">
              <Title
                order={3}
                c={`${color.blue_800}`}
                style={{
                  whiteSpace: "pre-line",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                Showing {selectedStaff?.name}'s details{" "}
              </Title>

              <Space h={"xs"} />

              <div style={{ gap: 6 }}>
                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Full Name</Text>
                  <Text w={"65%"} c={`${color.dimmed}`}>
                    {selectedStaff?.name}
                  </Text>
                </Flex>
                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Course</Text>
                  <Text w={"65%"} c={`${color.dimmed}`}>
                    {selectedStaff?.course}
                  </Text>
                </Flex>
                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Academic Year</Text>
                  <Text w={"65%"} c={`${color.dimmed}`}>
                    {selectedStaff?.academicYear}
                  </Text>
                </Flex>
                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Gender</Text>
                  <Text w={"65%"} c={`${color.dimmed}`}>
                    {selectedStaff?.gender}
                  </Text>
                </Flex>
                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Address</Text>
                  <Text w={"65%"} c={`${color.dimmed}`}>
                    {selectedStaff?.address}
                  </Text>
                </Flex>
                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Birth Date</Text>
                  <Text w={"65%"} c={`${color.dimmed}`}>
                    {selectedStaff?.birthDate}
                  </Text>
                </Flex>
                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Mobile</Text>
                  <Anchor
                    w={"65%"}
                    href={`tell:${selectedStaff?.mobile}`}
                    lineClamp={1}
                  >
                    {selectedStaff?.mobile}
                  </Anchor>
                </Flex>
                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Email</Text>
                  <Anchor
                    w={"65%"}
                    href={`mailto:${selectedStaff?.email}`}
                    lineClamp={1}
                  >
                    {selectedStaff?.email}
                  </Anchor>
                </Flex>
                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Status</Text>
                  <Text w={"65%"} c={`${color.dimmed}`}>
                    {selectedStaff?.status === STATUS.ACTIVE ? (
                      <Badge bg={`${color.green}`} w={120} py={"xs"}>
                        {selectedStaff?.status}
                      </Badge>
                    ) : (
                      <Badge bg={`${color.red}`} w={120} py={"xs"}>
                        {selectedStaff?.status}
                      </Badge>
                    )}
                  </Text>
                </Flex>
              </div>
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </Flex>
    </div>
  );
};

export default StaffInformation;
