import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const buttonsize = {
    fontSize: "12px",
    marginTop: "13px",
    fontWeight:"700"
  };
  
  const proButtonStyle = {
    fontSize: "13px",
    marginTop: "13px",
    backgroundColor: "black",
     fontWeight:"700",
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
     fontWeight:"700"
  };
  
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#2B2B2B",
      },
    },
  });
  
  const Navbar = () => {
    const Navigate = useNavigate();
    function handlesubmit() {
      Navigate("/profile");
    }
    function handlesubmitTwo(){
      Navigate("/signin");
    }
    function handlesubmitThree(){
      Navigate("/signup");
    }
    function handlesubmitHome(){
        Navigate("/");

    }
    function handlesubmitFour(){
      window.location.href = "https://www.material-tailwind.com/docs/react/installation";
    }    
    return (
      <Box>
        <AppBar
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
              sx={{ flexGrow: 0.5, fontSize: "14px" ,marginLeft:"50px", fontWeight:"700"}}
            >
              Material Tailwind React
            </Typography>


           
            <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 3 }}>
              <Button sx={buttonsize} onClick={handlesubmitHome}color="inherit">
                Home
              </Button>
              <Button onClick={handlesubmit} sx={buttonsize} color="inherit">
                Profile
              </Button>
              <Button  onClick={handlesubmitTwo} sx={buttonsize} color="inherit">
                Sign In
              </Button>
              <Button  onClick={handlesubmitThree} sx={buttonsize} color="inherit">
                Sign Up
              </Button>
              <Button sx={buttonsize} onClick={handlesubmitFour} color="inherit">
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
       
      </Box>
    );
  };
  
  
  export default Navbar;  