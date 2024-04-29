import { Container } from "@mantine/core";
import React from "react";
import { color } from "../../../lib/colors";

const AdminDashboard: React.FC = () => {
  return (
    <Container
      size={"xl"}
      bg={`${color.transparent}`}
      w={"100%"}
      p={0}
    ></Container>
  );
};

export default AdminDashboard;
