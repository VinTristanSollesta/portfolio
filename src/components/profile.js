import React from "react";
import { Box, Typography } from "@mui/material";

import Colors from "../colors";
import styles from "../styles";

import ProfilePicture from "../assets/pic.jpg";

const Profile = () => {
  return (
    <Box sx={[{ height: "80vh" }, styles.container]}>
      <Box
        width={"100%"}
        sx={{
          paddingTop: "15vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "300px",
              width: "300px",
              padding: "10px",
            }}
          >
            <img
              src={ProfilePicture}
              width={"100%"}
              style={{ borderRadius: 150 }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography variant="h2" style={{}}>
              Vin Tristan Gutierrez Sollesta
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
