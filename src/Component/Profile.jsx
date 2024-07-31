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
import Navbar from "./Navbar";

function Profile() {
  return (
    <>
      <Navbar />
      {/* 2 box */}
      <Box sx={{ height: "30%", backgroundColor: "#000000" }}></Box>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            marginRight: "40px",
            position: "absolute",
            top: "300px",
            right: "50px",
            display: "block",
          }}
        >
          <Box textAlign="center " sx={{ display: "flex" }}>
            <Typography variant="body2">10</Typography>
            <Typography variant="h6">Friends</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="body2">89</Typography>
            <Typography variant="h6">Photos</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="body2">22</Typography>
            <Typography variant="h6">Comments</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default Profile;
