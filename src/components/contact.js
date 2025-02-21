import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import styles from "../styles";
import SendIcon from "@mui/icons-material/Send";

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
      <Box
        sx={{
          border: "1px solid black",
          padding: 5,
          borderRadius: 15,
          justifyItems: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h3">Contact Us</Typography>
        <Box sx={{ width: "300px", alignSelf: "center", p: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ display: "flex", my: 2 }}
            inputMode="email"
          />

          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            sx={{ display: "flex", my: 2 }}
          />
          <Button
            onClick={() => {
              console.log("Email: " + email);
              console.log("Message: " + emailBody);
            }}
            variant="contained"
            sx={{ display: "flex", width: "100%" }}
          >
            Send
            <Typography>
              <SendIcon />
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
