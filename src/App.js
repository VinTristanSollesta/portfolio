import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles";
import LandingPage from "./components/landingpage";
import Contact from "./components/contact";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoverPage from "./components/coverpage";
import Profile from "./components/profile";
import Portfolio from "./components/portfolio";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <LandingPage windowWidth={windowWidth} /> },
    { path: "/home", element: <LandingPage windowWidth={windowWidth} /> },
    { path: "/contact", element: <Contact windowWidth={windowWidth} /> },
    { path: "/profile", element: <Profile windowWidth={windowWidth} /> },
    { path: "/portfolio", element: <Portfolio windowWidth={windowWidth} /> },
  ]);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ height: "90vh", overflowY: "auto" }}>
        {/* <Box sx={{ overflowY: "auto" }}> */}
        <RouterProvider router={router} />
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
