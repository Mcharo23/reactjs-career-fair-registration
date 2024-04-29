import React, { useContext } from "react";
import { useForm } from "@mantine/form";
import {
  Container,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Flex,
  Avatar,
} from "@mantine/core";
import { IconPasswordUser, IconUser } from "@tabler/icons-react";
import { color } from "../../lib/colors";
import AuthContext from "../../context/auth-context";
import DotLoader from "../../global/components/dot-loader";
import logo from "../../assets/knowledge.png";

const Authentication: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { loginUnser, loading, setLoading } = authContext;

  // const { navigateToRegister } = useCustomNavigation();

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
    <Container
      fluid
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && <DotLoader />}
      <Flex direction={"column"} justify={"center"} align={"center"} gap={"md"}>
        <Flex direction={"row"} align={"center"} justify={"center"} gap={"xs"}>
          <Avatar src={`${logo}`} alt="icon" radius="xl" />
          <Title
            order={2}
            c={`${color.blue_950}`}
            style={{
              whiteSpace: "pre-line",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            CAREER FAIR
          </Title>
        </Flex>

        <form onSubmit={form.onSubmit(handleOnSubmit)}>
          <Paper withBorder shadow="md" p={30} radius="md">
            <TextInput
              c={`${color.blue_500}`}
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
              c={`${color.blue_500}`}
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

            <Button type="submit" fullWidth mt="xl" variant="filled">
              Sign in
            </Button>
          </Paper>
        </form>
      </Flex>
    </Container>
  );
};

export default Authentication;
