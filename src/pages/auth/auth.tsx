import React, { useContext } from "react";
import { useForm } from "@mantine/form";
import {
  Container,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Flex,
  Checkbox,
  Anchor,
  Text,
  Stack,
} from "@mantine/core";
import { IconPasswordUser, IconUser } from "@tabler/icons-react";
import AuthContext from "../../context/auth-context";
import DotLoader from "../../global/components/dot-loader";
import useCustomNavigation from "../../global/function/navigation";

const Authentication: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { loginUnser, loading, setLoading } = authContext;

  const { navigateToRegister } = useCustomNavigation();

  //FORMS
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (val) =>
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val)
          ? null
          : "Invalid email",
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleOnSubmit = () => {
    setLoading(true);
    loginUnser({ email: form.values.email, password: form.values.password })
      .then((error) => {
        if (error) {
          // Handle the error here
          setLoading(false);
          if (error === "Invalid credentials") {
            form.setFieldError("email", error);
            form.setFieldError("password", error);
          } else {
            console.error("Login failed:", error);
          }
        } else {
          setLoading(false);
          // form.reset();
          // Login successful, perform any necessary actions
        }
      })
      .catch((error) => {
        setLoading(false);
        // Handle any unexpected errors from the login process
        console.error("Unexpected error:", error);
      });
  };

  return (
    <Container size={420} my={40}>
      <Stack>
        {loading && <DotLoader />}
        <form onSubmit={form.onSubmit(handleOnSubmit)}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              type="email"
              label="Email"
              value={form.values.email}
              placeholder="you@gmail.com"
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email}
              leftSection={<IconUser />}
              mt={"md"}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={form.errors.password}
              leftSection={<IconPasswordUser />}
              mt="md"
            />

            <Flex
              align={"center"}
              justify={"space-between"}
              direction={"row"}
              mt={"md"}
            >
              <Checkbox label="Remember me" />

              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Flex>

            <Button type="submit" fullWidth mt="xl">
              Sign in
            </Button>

            <Text ta={"center"} mt="md">
              Don&apos;t have an account?{" "}
              <Anchor<"a">
                href="#"
                fw={700}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToRegister();
                }}
              >
                Register
              </Anchor>
            </Text>
          </Paper>
        </form>
      </Stack>
    </Container>
  );
};

export default Authentication;
