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

const websites = [
  {
    name: "RJR Marketing",
    link: "https://rjrmarketingiloilo.com",
  },
  { name: "ArtisTech", link: "https://artistech.vercel.app" },
  { name: "RePalette", link: "https://repalette.vercel.app" },
];

const Portfolio = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          textAlign: "center",
          m: 3,
          p: 1,
          border: "1px solid gray",
          backgroundColor: Colors.light,
          borderRadius: 5,
        }}
      >
        <Typography variant="h4">Artworks</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
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
                  width: "320px",
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
      <Box
        sx={{
          textAlign: "center",
          m: 5,
          p: 5,
          border: "1px solid gray",
          borderRadius: 5,
        }}
      >
        <Typography variant="h4">Websites</Typography>
        <Box>
          {websites.map((website) => {
            return (
              <Typography>
                <Link href={website.link} underline="none">
                  {website.name}
                </Link>
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
