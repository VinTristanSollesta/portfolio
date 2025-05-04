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
        margin: 5,
        overflowY: "auto",
        padding: 3,
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Artworks
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
          padding: 2,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={image.path}
                alt={image.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                textAlign: "center",
                color: Colors.dark,
              }}
            >
              {image.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
