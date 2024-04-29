import {
  Paper,
  Container,
  TextInput,
  Flex,
  Avatar,
  Button,
  Grid,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput, DateValue } from "@mantine/dates";
import React from "react";
import SingleImageUpload from "./single-image-upload";
import { GENDER } from "../../lib/enum";
import { color } from "../../lib/colors";
import useShowAndUpdateNotification from "./show-and-update-notification";
import { IconCheck } from "@tabler/icons-react";
import SelectGender from "./gender-select";

type CustomerRegistrationProps = {
  closeRegisterCustomer: () => void;
};

const CustomerRegistration: React.FC<CustomerRegistrationProps> = ({
  closeRegisterCustomer,
}) => {
  const { loadingNotification, updateNotification } =
    useShowAndUpdateNotification();

  const form = useForm<{
    name: string;
    email: string;
    phoneNumber: string;
    gender: GENDER | null;
    registrationNumber: string;
    cardNumber: string;
    birthDate: Date | null;
    passport: File | null;
  }>({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      gender: null,
      registrationNumber: "",
      cardNumber: "",
      birthDate: null,
      passport: null,
    },
    validate: {
      name: (val) => (val.length > 5 ? null : "Name is too short"),
      email: (val) =>
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val)
          ? null
          : "Invalid email",
      phoneNumber: (val) =>
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(val)
          ? null
          : "Invalid phone number",
      gender: (val) => (val === null ? "Please select a gender" : null),
      registrationNumber: (val) =>
        val.length === 0 ? "Please enter registration number" : null,
      cardNumber: (val) =>
        val.length === 0 ? "Please select a card number" : null,

      passport: (val) => (!val ? "Please upload your passport" : null),
      birthDate: (val) =>
        val === null ? "Please input your birth date" : null,
    },
  });

  const handleOnSubmit = () => {
    loadingNotification({
      id: "register",
      message: "Please wait, we are saving your details.",
      color: color.blue_500,
      title: "Registration",
    });

    updateNotification({
      id: "register",
      message: "Successfully registered",
      color: color.green,
      title: "Registration",
      delay: 5000,
      icon: <IconCheck size="1rem" />,
    });

    setTimeout(() => {
      closeRegisterCustomer();
    }, 1000);
  };

  return (
    <Paper p={"md"} shadow="xs" radius={"md"} w={"100%"}>
      <form onSubmit={form.onSubmit(handleOnSubmit)}>
        <Grid>
          <Grid.Col span={{ base: 12 }}>
            <TextInput
              type="text"
              label="Name"
              value={form.values.name}
              placeholder="Your name"
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              error={form.errors.name}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              type="email"
              label="Email"
              value={form.values.email}
              placeholder="you@gmail.com"
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              type="tel"
              label="Phone number"
              value={form.values.phoneNumber}
              placeholder="eg. +255777777777"
              onChange={(event) =>
                form.setFieldValue("phoneNumber", event.currentTarget.value)
              }
              error={form.errors.phoneNumber}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <SelectGender
              variant="default"
              label="Gender"
              value={form.values.gender}
              placeholder="Select Gender"
              onChange={(value) => form.setFieldValue("gender", value)}
              error={form.errors.gender}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              label="Registration Number"
              value={form.values.registrationNumber}
              placeholder="registration Number"
              onChange={(event) =>
                form.setFieldValue(
                  "registrationNumber",
                  event.currentTarget.value
                )
              }
              error={form.errors.registrationNumber}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              type="number"
              label="Card Number"
              value={form.values.cardNumber}
              placeholder="Type here"
              onChange={(event) =>
                form.setFieldValue("cardNumber", event.currentTarget.value)
              }
              error={form.errors.cardNumber}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <DateInput
              value={form.values.birthDate}
              label="Date of birth"
              placeholder="DD MMM YYYY"
              valueFormat="DD MMM YYYY"
              // maxDate={dayjs(new Date()).subtract(17, "years").toDate()}
              clearable
              onChange={(dateValue: DateValue) =>
                form.setFieldValue("birthDate", dateValue)
              }
              error={form.errors.birthDate}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12 }}>
            <Flex direction={"row"} align={"center"} justify={"center"}>
              <Container w={"80%"} p={0}>
                <SingleImageUpload
                  description=""
                  error={form.errors.passport}
                  value={form.values.passport}
                  label="Upload Passport"
                  onChange={(file: File | null) => {
                    if (file) {
                      form.setFieldValue("passport", file);
                    } else {
                      form.setFieldValue("passport", null);
                    }
                  }}
                  placeholder="Customer Passport"
                  key={form.values.passport ? "" : form.values.passport}
                />
              </Container>
              <Flex w={"20%"} align={"center"} justify={"center"}>
                <Avatar
                  src={
                    form.values.passport !== null
                      ? URL.createObjectURL(form.values.passport)
                      : null
                  }
                  w={60}
                  h={60}
                  radius={"sm"}
                />
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>

        <Flex justify="center" direction={"row"} gap={"md"}>
          <Button
            type="button"
            fullWidth
            bg={`${color.red}`}
            mt="xl"
            onClick={closeRegisterCustomer}
          >
            Cancel
          </Button>
          <Button type="submit" fullWidth mt="xl">
            Save
          </Button>
        </Flex>
      </form>
    </Paper>
  );
};

export default CustomerRegistration;
