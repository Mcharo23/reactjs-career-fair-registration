import {
  Button,
  Container,
  Divider,
  Flex,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { color } from "../../../lib/colors";
import { IconPlus } from "@tabler/icons-react";
import StaffTable from "./components/staff-table";
import { useDisclosure } from "@mantine/hooks";
import StaffRegistrationForm from "./staff-registration-form";

const AdminStaff: React.FC = () => {
  const [
    openedStaffRegModalForm,
    { open: openStaffRegModalForm, close: closeStaffRegModalForm },
  ] = useDisclosure(false);

  return (
    <div>
      <Container size={"xl"} p={0}>
        <Modal
          opened={openedStaffRegModalForm}
          onClose={closeStaffRegModalForm}
          title={<Text c={`${color.blue_950}`}>Staff Registration</Text>}
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
          <Divider size={"sm"} />

          <StaffRegistrationForm
            closeStaffRegModalForm={closeStaffRegModalForm}
          />
        </Modal>

        <Flex justify={"space-between"} align={"center"} p={"md"}>
          <Title order={3} c={`${color.blue_950}`}>
            List of Staffs
          </Title>

          <Button
            rightSection={<IconPlus />}
            variant="default"
            c={`${color.blue_950}`}
            onClick={openStaffRegModalForm}
          >
            New Staff
          </Button>
        </Flex>

        <StaffTable />
      </Container>
    </div>
  );
};

export default AdminStaff;
