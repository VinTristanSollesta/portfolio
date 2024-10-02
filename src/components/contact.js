import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import styles from "../styles";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [emailButton, setEmailButton] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingX: 5,
        height: "80vh",
      }}
    >
      <Typography variant="h3">Contact Us</Typography>
      <Box sx={{ width: "400px", alignSelf: "center" }}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ display: "flex", my: 2 }}
        />

        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={emailBody}
          onChange={(e) => setEmailBody(e.target.value)}
          sx={{ display: "flex" }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
