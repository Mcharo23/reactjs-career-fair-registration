import React, { useEffect, useState } from "react";
import {
  Anchor,
  Avatar,
  Flex,
  Paper,
  Space,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { color } from "../../../../lib/colors";
import { CUSTOMER_DATA, CUSTOMER_TYPE } from "./data";

type CustomerInformationProps = {
  data: { email: string | null | undefined };
};

const CustomerInformation: React.FC<CustomerInformationProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string | null>("OverView");
  const [selectedStaff, setSelectedStaff] = useState<CUSTOMER_TYPE | null>(
    null
  );

  useEffect(() => {
    const customer = CUSTOMER_DATA.find(
      (customer) => customer.email === data.email
    );
    if (customer) {
      setSelectedStaff(customer);
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
                {selectedStaff?.registrationNumber}
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
                  <Text w={"35%"}>Reg Number</Text>
                  <Text w={"65%"} c={`${color.dimmed}`}>
                    {selectedStaff?.registrationNumber}
                  </Text>
                </Flex>

                <Flex justify="start" align={"center"} direction={"row"}>
                  <Text w={"35%"}>Gender</Text>
                  <Text w={"65%"} c={`${color.dimmed}`}>
                    {selectedStaff?.gender}
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
                    href={`tell:${selectedStaff?.phoneNumber}`}
                    lineClamp={1}
                  >
                    {selectedStaff?.phoneNumber}
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
              </div>
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </Flex>
    </div>
  );
};

export default CustomerInformation;
