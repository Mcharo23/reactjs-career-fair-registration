import {
  Button,
  Container,
  Divider,
  Flex,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useContext, useEffect, useState } from "react";
import { color } from "../../lib/colors";
import { IconPlus } from "@tabler/icons-react";
import NewEventModalForm from "./components/new-event-modal-form";
import EventTable from "./components/event-table";
import useEventRequest from "./requests/request";
import { EventType } from "../../lib/type";
import AuthContext from "../../context/auth-context";
import { UserRole } from "../../lib/enum";
import { Navigate } from "react-router-dom";

const Event: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { user, logoutUser } = authContext;

  const [
    openedNewEventModal,
    { open: openNewEventModal, close: closeNewEventModal },
  ] = useDisclosure(false);

  const { fetchAllEvents } = useEventRequest();
  const [events, setEvents] = useState<EventType[]>([]);

  const fetchEvents = async () => {
    try {
      const eventsData = await fetchAllEvents();
      if (eventsData) {
        setEvents(eventsData);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseModal = () => {
    fetchEvents();
    closeNewEventModal();
  };

  if (user?.role !== UserRole.ADMIN) {
    logoutUser();
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Container size={"xl"} p={0}>
        <Modal
          opened={openedNewEventModal}
          onClose={closeNewEventModal}
          title={<Text c={`${color.blue_950}`}>New Event</Text>}
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

          <NewEventModalForm closeNewEventModal={handleCloseModal} />
        </Modal>

        <Flex justify={"space-between"} align={"center"} p={"md"}>
          <Title order={3} c={`${color.blue_950}`}>
            List of Staffs
          </Title>

          <Button
            rightSection={<IconPlus />}
            variant="default"
            c={`${color.blue_950}`}
            onClick={openNewEventModal}
          >
            New Staff
          </Button>
        </Flex>

        <EventTable key={events.length} eventData={events} />
      </Container>
    </div>
  );
};

export default Event;
