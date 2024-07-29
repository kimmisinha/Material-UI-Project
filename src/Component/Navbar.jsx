import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import TeamPage from "./TeamPage";
import OurTeam from "./OurTeam";
import CoWorking from "./CoWorking";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const buttonsize = {
  fontSize: "12px",
  marginTop: "13px",
};

const proButtonStyle = {
  fontSize: "13px",
  marginTop: "13px",
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "#2B2B2B",
  },
};

const freeDownloadButtonStyle = {
  fontSize: "13px",
  marginTop: "13px",
  backgroundColor: "#2B2B2B",
  color: "white",
};

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2B2B2B",
    },
  },
});


const Navbar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          color: "white",
          fontSize: "1rem",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.5, fontSize: "14px" ,marginLeft:"50px"}}
          >
            Material Tailwind React
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 3 }}>
            <Button sx={buttonsize} color="inherit">
              Home
            </Button>
            <Button sx={buttonsize} color="inherit">
              Profile
            </Button>
            <Button sx={buttonsize} color="inherit">
              Sign In
            </Button>
            <Button sx={buttonsize} color="inherit">
              Sign Up
            </Button>
            <Button sx={buttonsize} color="inherit">
              Docs
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={proButtonStyle}
              component="a"
              href="https://www.material-tailwind.com/blocks?ref=mtkr"
              target="_blank"
            >
              PRO VERSION
            </Button>
            <ThemeProvider theme={customTheme}>
              <Button
                sx={freeDownloadButtonStyle}
                variant="contained"
                component="a"
                href="https://www.creative-tim.com/product/material-tailwind-kit-react?_ga=2.6472561.2125301357.1722243050-1606001376.1722243050"
                target="_blank"
              >
                FREE DOWNLOAD
              </Button>
            </ThemeProvider>
          </Box>
        </Toolbar>
      </AppBar>
      <LandingPage/>
      <TeamPage/>
      <OurTeam/>
      <CoWorking/>
      <ContactUs/>
      <Footer/>
    </Box>
  );
};



export default Navbar;
