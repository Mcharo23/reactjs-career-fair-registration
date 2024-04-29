import { useForm } from "@mantine/form";
import React, { useContext, useRef } from "react";
import { Event } from "../../../lib/enum";
import {
  ActionIcon,
  Button,
  Flex,
  Grid,
  NumberInput,
  Paper,
  Select,
  TextInput,
  rem,
} from "@mantine/core";
import { color } from "../../../lib/colors";
import { DateInput, DateValue, TimeInput } from "@mantine/dates";
import { IconCheck, IconClock } from "@tabler/icons-react";
import AuthContext from "../../../context/auth-context";
import DotLoader from "../../../global/components/dot-loader";
import useShowAndUpdateNotification from "../../../global/components/show-and-update-notification";

type NewEventModalFormProps = {
  closeNewEventModal: () => void;
};
const NewEventModalForm: React.FC<NewEventModalFormProps> = ({
  closeNewEventModal,
}) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { loading, setLoading, authToken } = authContext;

  const ref = useRef<HTMLInputElement>(null);

  const { showNotification } = useShowAndUpdateNotification();

  const form = useForm<{
    eventName: string;
    eventType: Event | null;
    eventDate: Date | null;
    eventTime: string;
    location: string;
    description: string;
    capacity: number | null;
  }>({
    initialValues: {
      eventName: "",
      eventType: null,
      eventDate: null,
      eventTime: "",
      location: "",
      description: "",
      capacity: null,
    },
    validate: {
      eventName: (val) => (val.length > 0 ? null : "event name required"),
      eventType: (val) => (val !== null ? null : "event type required"),
      eventTime: (val) => (val !== null ? null : "event time required"),
      eventDate: (val) => (val !== null ? null : "event date required"),
      location: (val) => (val.length > 0 ? null : "event location required"),
      description: (val) =>
        val.length > 0 ? null : "Event description required",
      capacity: (val) => (val !== null ? null : "Event capacity required"),
    },
  });

  const handleOnSubmit = () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${authToken}`);

    const raw = JSON.stringify({
      eventName: form.values.eventName,
      eventType: String(form.values.eventType),
      eventDate: form.values.eventDate
        ? form.values.eventDate.toISOString().split("T")[0]
        : "", // Convert Date to "YYYY-MM-DD" format
      eventTime: form.values.eventTime,
      location: form.values.location,
      description: form.values.description,
      capacity: form.values.capacity,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:8080/career-fair/events/add-event`, requestOptions)
      .then((response) => {
        if (response.status === 201) {
          // Handle successful registration
          setTimeout(() => {
            setLoading(false);
            showNotification({
              id: "new",
              message: "Successfully event added",
              title: "New Event",
              color: color.green,
              icon: <IconCheck />,
            });
            form.reset();
            closeNewEventModal();
          }, 1000);
          // Redirect or perform other actions as needed for successful registration
        } else {
          // Handle errors for other HTTP response statuses
          return response.json(); // Parse response JSON for error handling
        }
      })
      .then((data) => {
        // setLoading(false);
        if (data) {
          // Handle errors returned by the server
          setLoading(false);
          Object.keys(data).forEach((field) => {
            const errors = data[field];
            if (errors.length > 0) {
              form.setFieldError(field, errors[0]);
            }
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <Paper p={"md"} radius={"md"} w={"100%"}>
      {loading && <DotLoader />}
      <form onSubmit={form.onSubmit(handleOnSubmit)}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              type="text"
              label=""
              value={form.values.eventName}
              placeholder="Evant Name"
              onChange={(event) =>
                form.setFieldValue("eventName", event.currentTarget.value)
              }
              error={form.errors.eventName}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Select
              label={""}
              value={form.values.eventType}
              placeholder={"Event type"}
              data={[
                Event.CAREER_FAIR,
                Event.NETWORKING_EVENT,
                Event.PRESENTATION,
              ]}
              onChange={(value: string | null) => {
                if (Object.values(Event).includes(value as Event)) {
                  form.setFieldValue("eventType", value as Event);
                }
              }}
              error={form.errors.eventType}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <DateInput
              value={form.values.eventDate}
              label=""
              placeholder="YYYY-MMM-DD"
              valueFormat="YYYY-MMM-DD"
              minDate={new Date()}
              clearable
              onChange={(dateValue: DateValue) =>
                form.setFieldValue("eventDate", dateValue)
              }
              error={form.errors.eventDate}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <TimeInput
              label=""
              value={form.values.eventTime}
              onChange={(value) =>
                form.setFieldValue("eventTime", value.currentTarget.value)
              }
              error={form.errors.eventType}
              placeholder="Event time"
              ref={ref}
              rightSection={pickerControl}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              type="text"
              label=""
              value={form.values.location}
              placeholder="Event location"
              onChange={(event) =>
                form.setFieldValue("location", event.currentTarget.value)
              }
              error={form.errors.location}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              type="text"
              label=""
              value={form.values.description}
              placeholder="Event description"
              onChange={(event) =>
                form.setFieldValue("description", event.currentTarget.value)
              }
              error={form.errors.description}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <NumberInput
              type="text"
              label=""
              value={form.values.capacity ?? ""}
              placeholder="Event capacity"
              onChange={(event) =>
                form.setFieldValue("capacity", Number(event))
              }
              error={form.errors.description}
            />
          </Grid.Col>
        </Grid>

        <Flex justify="center" direction={"row"} gap={"md"}>
          <Button
            type="button"
            fullWidth
            bg={`${color.red}`}
            mt="xl"
            onClick={closeNewEventModal}
          >
            Cancel
          </Button>
          <Button type="submit" fullWidth mt="xl">
            Submit
          </Button>
        </Flex>
      </form>
    </Paper>
  );
};

export default NewEventModalForm;
