import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Nezuko from "../assets/gallery/Nezuko.jpg";
import Seraphine from "../assets/gallery/Seraphine.jpg";

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
          m: 5,
          p: 5,
          border: "1px solid gray",
          borderRadius: 15,
        }}
      >
        <Typography variant="h4">Artworks</Typography>
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
      <Box
        sx={{
          textAlign: "center",
          m: 5,
          p: 5,
          border: "1px solid gray",
          borderRadius: 15,
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
