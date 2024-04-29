import { Container } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { EventType } from "../../lib/type";
import useEventRequest from "../event/requests/request";
import EventsTable from "./events-table";
import DotLoader from "../../global/components/dot-loader";
import useShowAndUpdateNotification from "../../global/components/show-and-update-notification";
import AuthContext from "../../context/auth-context";
import { IconCheck } from "@tabler/icons-react";
import { color } from "../../lib/colors";

const Events: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { loading, setLoading } = authContext;

  const { showNotification } = useShowAndUpdateNotification();

  const { fetchAllEvents, attendEvent } = useEventRequest();
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

  const handleAttendEvent = async (eventId: number) => {
    setLoading(true);
    try {
      const message = await attendEvent(eventId);

      setTimeout(() => {
        setLoading(false);
        showNotification({
          id: "attend",
          message: message,
          title: "Event attendance",
          color: color.green,
          icon: <IconCheck />,
        });
        fetchEvents();
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.error("Failed to attend event:", error);
    }
  };

  return (
    <div>
      <Container size={"xl"} p={0}>
        {loading && <DotLoader />}
        <EventsTable
          key={events.length}
          eventData={events}
          onClick={handleAttendEvent}
        />
      </Container>
    </div>
  );
};

export default Events;
