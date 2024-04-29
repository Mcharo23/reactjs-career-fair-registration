import { Loader } from "@mantine/core";
import React from "react";
import { color } from "../../lib/colors";

const DotLoader: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: color.semi1_transparent_black,
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader color="blue" size={100} type="dots" />
    </div>
  );
};

export default DotLoader;
