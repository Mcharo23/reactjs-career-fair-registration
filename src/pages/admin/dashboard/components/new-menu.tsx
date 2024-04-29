import { useForm } from "@mantine/form";
import React from "react";
import useShowAndUpdateNotification from "../../../../global/components/show-and-update-notification";
import { IconCheck } from "@tabler/icons-react";
import { color } from "../../../../lib/colors";
import { CATEGORY, DAY_ROUTINE } from "../../../../lib/enum";
import {
  Avatar,
  Button,
  Container,
  Flex,
  Grid,
  Paper,
  TextInput,
} from "@mantine/core";
import SelectDayRoutine from "../../../../global/components/day-routine-select";
import SelectCategory from "../../../../global/components/category-select";
import SingleImageUpload from "../../../../global/components/single-image-upload";

type CustomerRegistrationProps = {
  closeNewMenuModalForm: () => void;
};

const NewMenu: React.FC<CustomerRegistrationProps> = ({
  closeNewMenuModalForm,
}) => {
  const { loadingNotification, updateNotification } =
    useShowAndUpdateNotification();

  const form = useForm<{
    foodName: string;
    foodCategory: CATEGORY | null;
    price: string;
    availableHours: DAY_ROUTINE | null;
    menuImage: File | null;
  }>({
    initialValues: {
      foodName: "",
      foodCategory: null,
      price: "",
      availableHours: null,
      menuImage: null,
    },
    validate: {
      foodName: (val) => (val.length > 2 ? null : "Name is too short"),

      foodCategory: (val) => (val === null ? "Please select a category" : null),
      price: (val) => (val.length === 0 ? "Food price required" : null),
      availableHours: (val) =>
        val === null ? "Select food available hours" : null,

      menuImage: (val) => (!val ? "Please upload food image" : null),
    },
  });

  const handleOnSubmit = () => {
    loadingNotification({
      id: "register",
      message: "Please wait, we are saving your details.",
      color: color.blue_500,
      title: "New Menu",
    });

    updateNotification({
      id: "register",
      message: "Successfully registered",
      color: color.green,
      title: "New Menu",
      delay: 5000,
      icon: <IconCheck size="1rem" />,
    });

    setTimeout(() => {
      closeNewMenuModalForm();
    }, 1000);
  };
  return (
    <Paper p={"md"} radius={"md"} w={"100%"}>
      <form onSubmit={form.onSubmit(handleOnSubmit)}>
        <Grid>
          <Grid.Col span={{ base: 12 }}>
            <TextInput
              type="text"
              label="Food Name"
              value={form.values.foodName}
              placeholder="name"
              onChange={(event) =>
                form.setFieldValue("foodName", event.currentTarget.value)
              }
              error={form.errors.foodName}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <SelectDayRoutine
              placeholder="Available hours"
              error={form.errors.availableHours}
              variant="default"
              label="Available Hours"
              value={form.values.availableHours}
              onChange={(value) => form.setFieldValue("availableHours", value)}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <SelectCategory
              placeholder="Food category"
              error={form.errors.foodCategory}
              variant="default"
              label="Food Category"
              value={form.values.foodCategory}
              onChange={(value) => form.setFieldValue("foodCategory", value)}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12 }}>
            <TextInput
              type="number"
              label="Price"
              value={form.values.price}
              placeholder="name"
              onChange={(event) =>
                form.setFieldValue("price", event.currentTarget.value)
              }
              error={form.errors.price}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12 }}>
            <Flex direction={"row"} align={"center"} justify={"center"}>
              <Container w={"80%"} p={0}>
                <SingleImageUpload
                  description=""
                  error={form.errors.menuImage}
                  value={form.values.menuImage}
                  label="Upload Menu Image"
                  onChange={(file: File | null) => {
                    if (file) {
                      form.setFieldValue("menuImage", file);
                    } else {
                      form.setFieldValue("menuImage", null);
                    }
                  }}
                  placeholder="Menu Image"
                  key={form.values.menuImage ? "" : form.values.menuImage}
                />
              </Container>
              <Flex w={"20%"} align={"center"} justify={"center"}>
                <Avatar
                  src={
                    form.values.menuImage !== null
                      ? URL.createObjectURL(form.values.menuImage)
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
            onClick={closeNewMenuModalForm}
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

export default NewMenu;
