import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle Drawer state
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Full-Width Drawer content
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "100%" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        VIN TRISTAN G. SOLLESTA
      </Typography>
      <List>
        {["Profile", "Portfolio", "Contact"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemText>
              <Link
                href={text.toLowerCase()}
                underline="none"
                color="inherit"
                sx={{ padding: 2, display: "block" }}
              >
                {text}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      {/* Main Header Container */}
      <Grid container sx={styles.header}>
        {/* Header Logo */}
        <Grid item xs={10} sm={6} sx={styles.headerLogo}>
          <Typography variant="h5">VIN TRISTAN G. SOLLESTA</Typography>
        </Grid>

        {/* Desktop Menu Links */}
        <Grid item sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
          <Grid container>
            {["Profile", "Portfolio", "Contact"].map((text) => (
              <Grid item sm={3} key={text}>
                <Typography style={styles.headerText}>
                  <Link
                    href={text.toLowerCase()}
                    underline="none"
                    color="inherit"
                    sx={{ padding: 3 }}
                  >
                    {text}
                  </Link>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Mobile Menu Button */}
        <Grid item xs={2} sx={{ display: { sm: "none" }, textAlign: "right" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* Full-Width Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header;
