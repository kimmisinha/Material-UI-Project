import React from "react";
import { Avatar, Box, Typography, Grid, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import image from "../assets/team-5.webp";

const buttonsize = {
  fontSize: "12px",
  marginTop: "13px",
  fontWeight: "700",
};

const proButtonStyle = {
  fontSize: "13px",
  marginTop: "13px",
  backgroundColor: "black",
  fontWeight: "700",
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
  fontWeight: "700",
};

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2B2B2B",
    },
  },
});

function Profile() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/profile");
  }

  function handleSubmitTwo() {
    navigate("/signin");
  }

  function handleSubmitThree() {
    navigate("/signup");
  }

  return (
    <>
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
            height: "270px",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 0.5,
                fontSize: "14px",
                marginLeft: "50px",
                fontWeight: "700",
              }}
            >
              Material Tailwind React
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", flexGrow: 3 }}
            >
              <Button sx={buttonsize} color="inherit">
                Home
              </Button>
              <Button onClick={handleSubmit} sx={buttonsize} color="inherit">
                Profile
              </Button>
              <Button onClick={handleSubmitTwo} sx={buttonsize} color="inherit">
                Sign In
              </Button>
              <Button
                onClick={handleSubmitThree}
                sx={buttonsize}
                color="inherit"
              >
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
      </Box>
      {/* 2 box */}
      <Paper
        elevation={3}
        style={{ padding: "20px", maxWidth: "600px", marginRight: "-200px" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Avatar
              alt="Remy Sharp"
              src={image}
              sx={{
                width: 156,
                height: 156,
                marginTop: "-120px",
                marginLeft: "40px",
              }}
            />

            <Typography style={{ marginLeft: "40px" }} variant="h5">
              Jenna Stones
            </Typography>
            <Typography
              style={{ color: "rgb(96,125,139)", marginLeft: "40px" }}
              variant="subtitle1"
            >
              jena@mail.com
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              style={{ marginLeft: "40px" }}
              mt={1}
            >
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2" color="textSecondary" ml={1}>
                Los Angeles, California
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              mt={1}
              style={{ marginLeft: "40px" }}
            >
              <WorkIcon fontSize="small" />
              <Typography variant="body2" color="textSecondary" ml={1}>
                Solution Manager - Creative Tim Officer
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              style={{ marginLeft: "40px" }}
              mt={1}
            >
              <SchoolIcon fontSize="small" />
              <Typography variant="body2" color="textSecondary" ml={1}>
                University of Computer Science
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              style={{ color: "rgb(96,125,139)", marginLeft: "40px" }}
              mt={2}
            >
              An artist of considerable range, Jenna the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs, and
              records all of his own music, giving it a warm, intimate feel with
              a solid groove structure. An artist of considerable range.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{ marginLeft: "40px" }}
              variant="button"
              display="block"
              gutterBottom
            >
              SHOW MORE
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Profile;
