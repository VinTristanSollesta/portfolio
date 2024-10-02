import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import styles from "./styles";
import Contact from "./components/contact";
import Header from "./includes/header";
import Footer from "./includes/footer";
import CoverPage from "./components/coverpage";
import Profile from "./components/profile";
import Portfolio from "./components/portfolio";

//typography
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Gallery from "./components/gallery";

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
    { path: "/", element: <Profile windowWidth={windowWidth} /> },
    { path: "/profile", element: <Profile windowWidth={windowWidth} /> },
    { path: "/contact", element: <Contact windowWidth={windowWidth} /> },
    { path: "/gallery", element: <Gallery windowWidth={windowWidth} /> },
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
