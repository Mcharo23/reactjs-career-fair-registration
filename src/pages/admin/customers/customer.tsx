import {
  Button,
  Container,
  Flex,
  Modal,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import React from "react";
import { color } from "../../../lib/colors";
import CustomerRegistration from "../../../global/components/customer-registration";
import CustomerTable from "./components/customer-table";

const Customer: React.FC = () => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <div>
      <Container size={"xl"}>
        <Modal
          opened={opened}
          onClose={close}
          title={<Text c={`${color.blue_500}`}>New Customer</Text>}
          radius={"md"}
          centered
          withCloseButton
          transitionProps={{
            transition: "fade",
            duration: 600,
            timingFunction: "linear",
          }}
          closeOnClickOutside={false}
        >
          <CustomerRegistration closeRegisterCustomer={close} />
        </Modal>
        <Flex justify={"space-between"} direction={"row"} align={"center"}>
          <Title order={3} c={`${color.blue_950}`}>
            Customer List
          </Title>
          <Button
            rightSection={<IconPlus />}
            variant="default"
            onClick={open}
            c={`${color.blue_950}`}
          >
            New Customer
          </Button>
        </Flex>

        <Space h={"md"} />

        <CustomerTable />
      </Container>
    </div>
  );
};

export default Customer;
