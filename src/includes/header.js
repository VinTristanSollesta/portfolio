import React, { useState } from "react";
import { Box, Grid, Button, Typography, Link } from "@mui/material";
import styles from "../styles";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [buttonPress, setButtonPress] = useState(false);
  return (
    <Grid container sx={styles.header}>
      <Grid item sm={6} sx={styles.headerLogo}>
        <Typography variant="h5">VIN TRISTAN SOLLESTA</Typography>
      </Grid>
      <Grid item sm={6}>
        <Grid container>
          <Grid item sm={3}>
            <Link href="#" underline="none" variant="inherit">
              <Typography style={styles.headerText}>Home</Typography>
            </Link>
          </Grid>
          <Grid item sm={3}>
            <Link href="#" underline="none" variant="inherit">
              <Typography style={styles.headerText}>About</Typography>
            </Link>
          </Grid>
          <Grid item sm={3}>
            <Link href="" underline="none" variant="inherit">
              <Typography style={styles.headerText}>Portfolio</Typography>
            </Link>
          </Grid>

          <Grid item sm={3}>
            <Link href="#" underline="none" variant="inherit">
              <Typography style={styles.headerText}>Contact</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
