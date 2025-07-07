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
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Colors from "../colors";
import styles from "../styles";

import ProfilePicture from "../assets/pic.jpg";

const educationItems = [
  {
    label: "Elementary: Santa Barbara Central Elementary School",
    img: "https://scontent.filo1-1.fna.fbcdn.net/v/t39.30808-6/366625582_131587830002568_8534647509850529161_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFeSwqH3CjpEoFSos_rGWXoG_mZ2qfOQ9Qb-Znap85D1MsCbq2028GiOoxAWTy6nCIcBWy94uWxClUDL0iitxGt&_nc_ohc=-YFFjPzQCQYQ7kNvwGgRujX&_nc_oc=AdkLXWqQhb4jJN2mM4nt0597ssNqRfGdx_tUICbp33cJg7aEF2qzsaKfx7WJpxH1h28&_nc_zt=23&_nc_ht=scontent.filo1-1.fna&_nc_gid=3p6TZb4_tR9B-b6MDrsS7Q&oh=00_AfGz3L8a4YSUfrATsqqrGgMunHu8GIPovAjmZ2QlWj6H8Q&oe=681D516B",
  },
  {
    label: "High School: Iloilo National High School",
    img: "https://iloilonhs.edu.ph/upload/system_file/logo.png",
  },
  {
    label: "College: Iloilo Science and Technology University",
    img: "https://www.isatu.edu.ph/wp-content/uploads/2019/02/ISAT-U-logo-2-768x768.png",
  },
];

const workItems = [
  {
    label: "Knode Software Services",
    img: "https://knodesoft.com/assets/Knode-logo.png",
  },
  {
    label: "Iloilo Science and Technology University",
    img: "https://www.isatu.edu.ph/wp-content/uploads/2019/02/ISAT-U-logo-2-768x768.png",
  },
  {
    label: "Ateneo De Iloilo",
    img: "https://en.wikipedia.org/wiki/Ateneo_de_Iloilo",
  },
];

const skillsItems = [
  {
    label: "Web Designing",
    img: "https://via.placeholder.com/150x100?text=Web+Design",
  },
  {
    label: "Graphics editing",
    img: "https://via.placeholder.com/150x100?text=Graphics",
  },
  {
    label: "Video editing",
    img: "https://via.placeholder.com/150x100?text=Video",
  },
  {
    label: "Programming",
    img: "https://via.placeholder.com/150x100?text=Programming",
  },
];

function Carousel({ items, title }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  React.useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, items.length]);

  return (
    <Box
      sx={{
        border: "1px solid white",
        borderRadius: 5,
        padding: { xs: 2, sm: 3 },
        marginY: { xs: 1, sm: 2 },
        cursor: "pointer",
        background: Colors.secondary,
        color: Colors.light,
        minHeight: { xs: 200, sm: 250 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        maxWidth: "100%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <IconButton onClick={handlePrev} sx={{ color: Colors.light }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          style={{ width: 160, textAlign: "center" }}
        >
          <img
            src={items[index].img}
            alt={items[index].label}
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 0,
              marginBottom: 8,
              maxWidth: "100%",
            }}
          />
          <Typography variant="h6">{items[index].label}</Typography>
        </motion.div>
        <IconButton onClick={handleNext} sx={{ color: Colors.light }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 1 }}>
        {items.map((_, i) => (
          <Box
            key={i}
            sx={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: i === index ? Colors.primary : Colors.light,
              opacity: i === index ? 1 : 0.4,
              mx: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

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
          {
            minHeight: "80vh",
            alignItems: "center",
            display: "flex",
            paddingX: { xs: 2, sm: 3, md: 5 },
            paddingY: 2,
          },
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
                        width: isSmallScreen ? "200px" : "280px",
                        height: isSmallScreen ? "200px" : "280px",
                        objectFit: "cover",
                        maxWidth: "100%",
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
                      <a href=""></a>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Tooltip title="LinkedIn">
                          <a href="www.linkedin.com/VinTristanSollesta"></a>
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
                          <a href="www.github.com/VinTristanSollesta"></a>
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
                      background: `linear-gradient(90deg, ${Colors.secondary} 30%, #EFCB68 70%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                      textShadow: "1px 1px 6px rgba(0,0,0,0.25)",
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
          paddingY: { xs: 4, sm: 6, md: 8 },
          paddingX: { xs: 2, sm: 3, md: 4 },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sx={{ width: "100%", paddingX: { xs: 1, sm: 2 } }}>
          <Carousel items={educationItems} title="Education" />
        </Grid>
        <Grid item xs={12} sx={{ width: "100%", paddingX: { xs: 1, sm: 2 } }}>
          <Carousel items={workItems} title="Work Experiences" />
        </Grid>
        <Grid item xs={12} sx={{ width: "100%", paddingX: { xs: 1, sm: 2 } }}>
          <Carousel items={skillsItems} title="Skills" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
