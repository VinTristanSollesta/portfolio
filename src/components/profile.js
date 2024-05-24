import React, { useState } from "react";
import { Grid, Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import Colors from "../colors";
import styles from "../styles";

import ProfilePicture from "../assets/pic.jpg";

const Profile = (props) => {
  const [buttonPress, setButtonPress] = useState(false);

  // Access the theme and create media queries
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Box
        sx={[
          { height: "90vh", alignItems: "center", display: "flex" },
          styles.container,
        ]}
      >
        <Box width={"100%"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexDirection: isSmallScreen ? "column" : "row", // Conditional flexDirection based on screen size
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "300px",
                  width: "300px",
                }}
              >
                <img src={ProfilePicture} style={{ borderRadius: 250 }} />
              </Grid>

              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "justify",
                  marginTop: isSmallScreen ? 2 : 0, // Conditional margin for small screens
                }}
              >
                <Typography variant={isSmallScreen ? "h4" : "h2"}>
                  Hi! I'm Vin!
                </Typography>
                <Typography variant={isSmallScreen ? "h6" : "h4"}>
                  An aspiring programmer.
                </Typography>
                <Typography variant="h6">
                  I develop websites to help the local small businesses in my
                  area. I mainly work with Figma, HTML5, CSS, JavaScript, React,
                  React Native, Express JS and PHP.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        sx={{ height: "60vh", backgroundColor: Colors.secondary }}
      >
        <Grid item xs={12} sm={4} md={4}></Grid>
        <Grid item xs={12} sm={4} md={4}></Grid>
        <Grid item xs={12} sm={4} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
