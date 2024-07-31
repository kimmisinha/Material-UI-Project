import React from "react";
import { Container, Box, Typography, Grid, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const LandingPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          padding: "4rem",
          fontFamily: "Roboto, sans-serif",
          height: "83vh",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "white",
            marginBottom: "1rem",
          }}
        >
          Your story starts with us.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          maxWidth="md"
          sx={{
            whiteSpace: "pre-line",
            fontWeight: 400,
            color: "white",
            marginBottom: "2rem",
          }}
        >
          This is a simple example of a Landing Page you can build using
          Material Tailwind.
          {"\n"}multiple components based on the Tailwind CSS and Material
          Design by Google.
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "-4rem",
          transform: "translateY(-30%)",
        }}
      >
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              border: "9px",
              padding: "1rem",
              textAlign: "center",
              margin: "1px",
              marginLeft: "25px",
              width: "390px",
              height: "190px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgb(51,51,51)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <ChatIcon fontSize="small" sx={{ color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "600", paddingTop: "19px" }}
            >
              Awarded Agency
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(160,175,182)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            // elevation={3}
            sx={{
              width: "390px",
              height: "190px",
              border: "9px",
              padding: "1rem",
              textAlign: "center",
              margin: "1px",
              marginRight: "0px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgb(51,51,51)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <ChatIcon fontSize="small" sx={{ color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "600", paddingTop: "19px" }}
            >
              Free Revisions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(160,175,182)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Keep your user engaged by providing meaningful information.
              Remember that by this time, the user is curious.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              border: "9px",
              padding: "1rem",
              textAlign: "center",
              margin: "1px",
              width: "390px",
              height: "190px",
              marginLeft: "-25px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgb(51,51,51)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <ChatIcon fontSize="small" sx={{ color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "600", paddingTop: "19px" }}
            >
              Verified Company
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(160,175,182)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Write a few lines about each one. A paragraph describing a feature
              will be enough. Keep your user engaged!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
