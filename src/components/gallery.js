import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Colors from "../colors";

import Nezuko from "../assets/gallery/Nezuko.jpg";
import Seraphine from "../assets/gallery/Seraphine.jpg";
import Wendy from "../assets/gallery/wendyRV.jpg";
import VectorAnne from "../assets/gallery/vector-anne.jpg";
import VectorEin from "../assets/gallery/vector-ein.jpg";
import VectorGiggs from "../assets/gallery/vector-giggs.jpg";

const images = [
  {
    label: "Nezuko",
    path: Nezuko,
  },
  {
    label: "Seraphine",
    path: Seraphine,
  },
  {
    label: "Wendy (Shon Seung-wan)",
    path: Wendy,
  },
  {
    label: "Anne Vector Art",
    path: VectorAnne,
  },
  {
    label: "Ein Vector Art",
    path: VectorEin,
  },
  {
    label: "Giggs Vector Art",
    path: VectorGiggs,
  },
];

const Gallery = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        border: "1px solid gray",
        backgroundColor: Colors.light,
        borderRadius: 5,
        height: "80vh",
      }}
    >
      <Typography variant="h4">Artworks</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {images.map((image) => {
          console.log(image);
          return (
            <Box
              sx={{
                display: "flex",
                margin: 1,
                flexDirection: "column",
                width: "280px",
              }}
            >
              <img
                src={image.path}
                style={{
                  filter: "drop-shadow(4px 4px 2px gray)",
                }}
                label={image.label}
                alt={image.label}
              />
              <Typography variant="h6" style={{ textAlign: "center" }}>
                {image.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Gallery;
