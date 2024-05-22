import React, { useState } from "react";
import { Box, Grid, Button, Typography, Link } from "@mui/material";
import styles from "../styles";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [buttonPress, setButtonPress] = useState(false);
  return (
    <Grid container sx={styles.header}>
      <Grid item sm={6} sx={styles.headerLogo}>
        <Typography variant="h5">VIN TRISTAN G. SOLLESTA</Typography>
      </Grid>
      <Grid item sm={6}>
        <Grid container>
          <Grid item sm={3}>
            <Typography style={styles.headerText}>
              <Link
                href="home"
                underline="none"
                variant="inherit"
                sx={{ padding: 3 }}
              >
                Home
              </Link>
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography style={styles.headerText}>
              <Link
                href="profile"
                underline="none"
                variant="inherit"
                sx={{ padding: 3 }}
              >
                Profile
              </Link>
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography style={styles.headerText}>
              <Link
                href="portfolio"
                underline="none"
                variant="inherit"
                sx={{ padding: 3 }}
              >
                Portfolio
              </Link>
            </Typography>
          </Grid>

          <Grid item sm={3}>
            <Typography style={styles.headerText}>
              <Link
                href="contact"
                underline="none"
                variant="inherit"
                sx={{ padding: 3 }}
              >
                Contact
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
