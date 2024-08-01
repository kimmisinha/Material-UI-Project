import React from "react";
import { Avatar, Box, Typography, Grid, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import image from "../assets/team-5.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profile() {
  return (
    <>
      <Navbar />
      {/* Header Box */}
      <Box
        sx={{
          width: "100vw",
          height: "35vh",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Content here if needed added button */}
      </Box>

      {/* Profile Info */}
      <Grid
        container
        spacing={2}
        elevation={3}
        style={{ padding: "20px", maxWidth: "600px", marginRight: "-200px" }}
      >
        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "-100px",
              marginLeft: "40px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={image}
              sx={{
                width: 156,
                height: 156,
              }}
            />
            <Box sx={{ marginLeft: "20px", marginTop: "90px" }}>
              <Typography
                style={{ color: "rgb(154,173,181)", fontWeight: "bold", marginBottom: "5px" }}
                variant="subtitle1"
              >
                Jenna Stones
              </Typography>
              <Typography
                style={{ color: "rgb(96,125,139)", marginTop: "0px" }}
                variant="subtitle1"
              >
                jena@mail.com
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            style={{ marginLeft: "40px" }}
            mt={1}
          >
            <LocationOnIcon fontSize="small" />
            <Typography
              variant="body2"
              style={{ color: "rgb(154,173,181)", fontWeight: "bold" }}
              ml={1}
            >
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
            <Typography
              variant="body2"
              style={{ color: "rgb(154,173,181)", fontWeight: "bold" }}
              ml={1}
            >
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
            <Typography
              variant="body2"
              style={{ color: "rgb(154,173,181)", fontWeight: "bold" }}
              ml={1}
            >
              University of Computer Science
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            style={{ color: "rgb(96,125,139)", marginLeft: "43px", lineHeight: 1.6 }}
            mt={2}
          >
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs, and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              marginLeft: "43px",
              color: "black",
              fontSize: "0.875rem", // Small size
              "&:hover": {
                backgroundColor: "rgb(96,125,139)",
                color: "white",
              },
            }}
          >
            SHOW MORE
          </Button>
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
          width: "300px", // Adjust the width as needed
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box textAlign="center">
              <Typography variant="body2">10</Typography>
              <Typography variant="h6">Friends</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box textAlign="center">
              <Typography variant="body2">22</Typography>
              <Typography variant="h6">Comments</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box textAlign="center">
              <Typography variant="body2">89</Typography>
              <Typography variant="h6">Photos</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Profile;
