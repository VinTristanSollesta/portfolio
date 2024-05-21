import React from "react";
import styles from "../styles";
import { Box, Typography, Grid, Link } from "@mui/material";

//icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box sx={styles.footerContainer}>
      <a
        style={styles.linkFooterStyle}
        href="https://www.twitter.com/Yldensylpha"
      >
        <TwitterIcon />
      </a>
      <a
        style={styles.linkFooterStyle}
        href="https://www.github.com/VinTristanSollesta"
      >
        <GitHubIcon />
      </a>
      <a
        style={styles.linkFooterStyle}
        href="https://www.facebook.com/Yldensylpha.3"
      >
        <FacebookIcon />
      </a>
    </Box>
  );
};

export default Footer;
