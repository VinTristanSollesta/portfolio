import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Header from "../includes/header";
import styles from "../styles";

import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import CoverPage from "./coverpage";

const LandingPage = () => {
  const [users, setUsers] = useState("");
  return (
    <Box>
      <CoverPage />
      <Grid container sx={styles.container}>
        <Grid item sm={12} xs={12}></Grid>
        <Grid item sm={6} xs={12}>
          <img src={Image1} style={{ width: "100%" }} />
        </Grid>
        <Grid item sm={6} xs={12} sx={{ padding: 5 }}>
          <Typography variant="h5">
            Lorem Ipsum Dolor est te seraphim. Lorem Ipsum Dolor est te
            Serpahim.Lorem Ipsum Dolor est te seraphim. Lorem Ipsum Dolor est te
            Serpahim.Lorem Ipsum Dolor est te seraphim. Lorem Ipsum Dolor est te
            Serpahim.Lorem Ipsum Dolor est te seraphim. Lorem Ipsum Dolor est te
            Serpahim.
          </Typography>
        </Grid>

        <Grid item sm={12} xs={12}>
          <img src={Image3} style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
