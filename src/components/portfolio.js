import React from "react";
import { Box, Typography } from "@mui/material";
import Nezuko from "../assets/Nezuko.jpg";
import Seraphine from "../assets/Seraphine.jpg";

const images = [
  {
    label: "Nezuko",
    path: Nezuko,
  },
  {
    label: "Seraphine",
    path: Seraphine,
  },
];

const Portfolio = () => {
  return (
    <Box sx={{ height: "90vh" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {images.map((image) => {
          console.log(image);
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <img
                src={image.path}
                style={{ height: "20rem" }}
                label={image.label}
                alt={image.label}
              />
              <Typography style={{ textAlign: "center" }}>
                {image.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Portfolio;
