import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

//mantine
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import { ModalsProvider } from "@mantine/modals";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light">
      <ModalsProvider>
        <Notifications limit={3} position="top-right" />
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
