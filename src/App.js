import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles";
import LandingPage from "./components/landingpage";
import Contact from "./components/contact";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>
//     loader: rootla
//   }
// ])

const App = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Box sx={{ overflowY: "auto" }}>
        <LandingPage />
        {/* <Contact /> */}
      </Box>
      <Footer />
    </Box>
    // <div style={{ width: "100%" }}>
    //   <Header />
    //   <div style={{ overflowY: "auto" }}>
    //     <LandingPage />
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default App;
