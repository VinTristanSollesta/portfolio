import React from "react";
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

const router = createBrowserRouter([
  {
    path: "/home",
    element: <LandingPage />,
  },
  { path: "/contact", element: <Contact /> },
  { path: "/profile", element: <Profile /> },
  { path: "/portfolio", element: <Portfolio /> },
]);

const App = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ height: "100vh", overflowY: "auto" }}>
        {/* <Box sx={{ overflowY: "auto" }}> */}
        <RouterProvider router={router} />
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
