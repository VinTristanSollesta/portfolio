import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import styles from "../styles";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [emailButton, setEmailButton] = useState(false);
  const [error, setError] = useState("");

  const handleSend = () => {
    if (!email || !emailBody) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    const mailto = `mailto:vintristan.sollesta@gmail.com?subject=Message from ${encodeURIComponent(email)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailto;
  };

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
        <Typography variant="h3" sx={{ mb: 2, color: "#160C28" }}>
          Let's Connect! Send Me an Email 📧
        </Typography>
        <Box sx={{ width: "300px", alignSelf: "center", p: 2 }}>
          <TextField
            label="Your Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ display: "flex", my: 2 }}
            inputMode="email"
            type="email"
            required
          />

          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            sx={{ display: "flex", my: 2 }}
            required
          />
          {error && (
            <Typography color="error" sx={{ mb: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            onClick={handleSend}
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
