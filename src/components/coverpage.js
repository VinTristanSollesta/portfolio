import React from "react";
import { Box, Button } from "@mui/material";
import Nezuko from "../assets/gallery/Nezuko.jpg";
import Seraphine from "../assets/gallery/Seraphine.jpg";

var count = 0;

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
            style={{ height: "90vh" }}
            label={image.label}
            alt={image.label}
          />
        );
      })}
    </Box>
  );
};

export default CoverPage;
