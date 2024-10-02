import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Colors from "../colors";

import RJRMarketingLogo from "../assets/rjrmarketing.png";
import ArtisTechLogo from "../assets/artistech-logo.png";
import RePalette from "../assets/re-palette-logo.png";

const websites = [
  {
    name: "RJR Marketing",
    link: "https://rjrmarketingiloilo.com",
    image: RJRMarketingLogo,
  },
  {
    name: "ArtisTech",
    link: "https://artistech.vercel.app",
    image: ArtisTechLogo,
  },
  {
    name: "RePalette",
    link: "https://repalette.vercel.app",
    image: RePalette,
  },
];

const Portfolio = () => {
  return (
    <Box sx={{ height: "80vh", overflowY: "auto" }}>
      <Box
        sx={{
          textAlign: "center",

          p: 5,
        }}
      >
        <Typography variant="h4">Websites</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {websites.map((website) => {
            return (
              <Link href={website.link} underline="none">
                <Box
                  sx={{
                    flexDirection: "column",
                    paddingY: 3,
                    border: "1px solid gray",
                    borderRadius: 5,
                    width: "150px",
                    paddingX: 5,
                    backgroundColor: Colors.light,
                    m: 1,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      transform: "scale(1.05)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box sx={{ height: "50px" }}>
                    <img src={website.image} style={{ height: "100%" }} />
                  </Box>
                  <Typography>{website.name}</Typography>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
