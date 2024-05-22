import React from "react";
import { Box } from "@mui/material";
import Nezuko from "../assets/Nezuko.jpg";
import Seraphine from "../assets/Seraphine.jpg";

const images = [
  {
    label: "Seraphine",
    path: Seraphine,
  },
  {
    label: "Nezuko",
    path: Nezuko,
  },
];

const CoverPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {images.map((image) => {
        console.log(image);
        return (
          <img
            src={image.path}
            style={{ height: "100vh" }}
            label={image.label}
            alt={image.label}
          />
        );
      })}
    </Box>
  );
};

export default CoverPage;
