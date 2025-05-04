import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import Colors from "../colors";
import styles from "../styles";

import ProfilePicture from "../assets/pic.jpg";

const Profile = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box>
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        sx={[
          { height: "90vh", alignItems: "center", display: "flex" },
          styles.container,
        ]}
      >
        <Box width={"100%"}>
          <Box
            sx={{
              display: "flex",
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
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      "&:hover .overlay": {
                        opacity: 1,
                      },
                    }}
                  >
                    <img
                      src={ProfilePicture}
                      style={{
                        borderRadius: 25,
                        width: isSmallScreen ? "250px" : "300px",
                        height: isSmallScreen ? "250px" : "300px",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        borderRadius: 25,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Tooltip title="LinkedIn">
                          <IconButton
                            sx={{
                              color: "white",
                              "&:hover": { transform: "scale(1.2)" },
                            }}
                          >
                            <LinkedInIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="GitHub">
                          <IconButton
                            sx={{
                              color: "white",
                              "&:hover": { transform: "scale(1.2)" },
                            }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Email">
                          <IconButton
                            sx={{
                              color: "white",
                              "&:hover": { transform: "scale(1.2)" },
                            }}
                          >
                            <EmailIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "justify",
                  marginTop: isSmallScreen ? 2 : 0,
                }}
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    variant={isSmallScreen ? "h4" : "h2"}
                    sx={{
                      background: `linear-gradient(45deg, ${Colors.primary}, ${Colors.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                    Hi! I'm Vin!
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant={isSmallScreen ? "h6" : "h4"}
                    sx={{
                      color: Colors.secondary,
                      mt: 1,
                    }}
                  >
                    An aspiring programmer.
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    I develop websites to help the local small businesses in my
                    area. I mainly work with Figma, HTML5, CSS, JavaScript,
                    React, React Native, Express JS and PHP.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
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
          component={motion.div}
          whileHover={{ scale: 1.02 }}
          sx={{
            border: "1px solid white",
            borderRadius: 5,
            padding: 3,
            margin: 0.5,
            cursor: "pointer",
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
          component={motion.div}
          whileHover={{ scale: 1.02 }}
          sx={{
            border: "1px solid white",
            borderRadius: 5,
            padding: 3,
            margin: 0.5,
            cursor: "pointer",
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
          component={motion.div}
          whileHover={{ scale: 1.02 }}
          sx={{
            border: "1px solid white",
            borderRadius: 5,
            padding: 3,
            margin: 0.5,
            cursor: "pointer",
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
