import { useState } from "react";
import { Button, Container, Paper, Stack, TextInput } from "@mantine/core";
import DotLoader from "../../global/components/dot-loader";
import { useForm } from "@mantine/form";
import useShowAndUpdateNotification from "../../global/components/show-and-update-notification";
import { IconCheck } from "@tabler/icons-react";
import useCustomNavigation from "../../global/function/navigation";

const Registration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { showNotification } = useShowAndUpdateNotification();
  const { navigateToAuth } = useCustomNavigation();

  const form = useForm<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      firstName: (val) => (val.length > 3 ? null : "Name is too short"),
      lastName: (val) => (val.length > 3 ? null : "Name is too short"),
      email: (val) =>
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val)
          ? null
          : "Invalid email",
      password: (val) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/.test(
          val
        )
          ? null
          : "Create strong password",
      confirmPassword: (val, values) =>
        val === values.password ? null : "Password do not match",
    },
  });

  const handleSubmit = () => {
    setLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      firstName: form.values.firstName,
      lastName: form.values.lastName,
      email: form.values.lastName,
      password: form.values.password,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/career-fair/users/register", requestOptions)
      .then((response) => {
        setLoading(false);
        if (response.status === 201) {
          response.text();
          showNotification({
            id: "register",
            title: "Registration",
            message: "Registration successful",
            color: "green",
            icon: <IconCheck />,
          });
          form.reset();
          setTimeout(() => {
            navigateToAuth();
          }, 100);
        } else {
          return response.json();
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <Container size={420} my={40}>
      <Stack>
        {loading && <DotLoader />}
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="First Name"
              placeholder="Enter your first name"
              name="firstName"
              value={form.values.firstName}
              onChange={(event) =>
                form.setFieldValue("firstName", event.currentTarget.value)
              }
              error={form.errors.firstName}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              name="lastName"
              value={form.values.lastName}
              onChange={(event) =>
                form.setFieldValue("lastName", event.currentTarget.value)
              }
              error={form.errors.lastName}
            />
            <TextInput
              type="email"
              label="Email"
              placeholder="Enter your email"
              name="email"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email}
            />
            <TextInput
              type="password"
              label="Password"
              placeholder="Enter your password"
              name="password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={form.errors.password}
            />

            <TextInput
              type="password"
              label="Confirm Password"
              placeholder="Enter your password"
              name="password"
              value={form.values.confirmPassword}
              onChange={(event) =>
                form.setFieldValue("confirmPassword", event.currentTarget.value)
              }
              error={form.errors.confirmPassword}
            />
            <Button type="submit" variant="filled" fullWidth mt={"lg"}>
              Register
            </Button>
          </Paper>
        </form>
      </Stack>
    </Container>
  );
};

export default Registration;
