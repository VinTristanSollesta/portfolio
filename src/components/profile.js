import React, { useState } from "react";
import { Grid, Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import Colors from "../colors";
import styles from "../styles";

import ProfilePicture from "../assets/pic.jpg";

const Profile = (props) => {
  const [buttonPress, setButtonPress] = useState(false);

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
              flexDirection: isSmallScreen ? "column" : "row",
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
        sx={{
          backgroundColor: Colors.secondary,
          color: Colors.light,
          paddingY: 10,
          paddingX: 5,
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={3.75}
          sx={{
            border: "1px solid white",
            borderRadius: 5,
            padding: 3,
            margin: 0.5,
          }}
        >
          <Box>
            <Typography variant="h4">Education</Typography>
          </Box>
          <Box>
            <Typography>
              Elementary: Santa Barbara Central Elementary School
            </Typography>
          </Box>
          <Box>
            <Typography>High School: Iloilo National High School</Typography>
          </Box>
          <Box>
            <Typography>
              College: Iloilo Science and Technology University
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3.75}
          sx={{
            border: "1px solid white",
            borderRadius: 5,
            padding: 3,
            margin: 0.5,
          }}
        >
          <Typography variant="h4">Work Experiences</Typography>
          <Typography>Knode Software Services</Typography>
          <Typography>Iloilo Science and Technology University</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3.75}
          sx={{
            border: "1px solid white",
            borderRadius: 5,
            padding: 3,
            margin: 0.5,
          }}
        >
          <Typography variant="h4">Skills</Typography>
          <Typography>Web Designing</Typography>
          <Typography>Graphics editing</Typography>
          <Typography>Video editing</Typography>
          <Typography>Programming</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
