import React, { useState } from "react";

import { Box, Grid, Typography, Link, TextField } from "@mui/material";
import styles from "../styles";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [emailButton, setEmailButton] = useState(false);

  return (
    <Box sx={styles.container}>
      <Box>
        <TextField sx={{ display: "flex" }}>Test</TextField>
        <TextField sx={{ display: "flex" }} multiline={4}>
          Body
        </TextField>
      </Box>
    </Box>
  );
};

export default Contact;
