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
          width: "100%",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            marginTop: "-2.5rem",
            fontWeight: 900,
            color: "white",
            fontFamily: "Roboto, sans-serif",
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
            fontFamily: "Roboto, sans-serif",
            color: "white",
            marginRight: "4.5rem",
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
          margin: "10px",
          marginTop: "-2rem",
          transform: "translateY(-30%)",
        }}
      >
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              marginLeft: "20px",
              width: "350px",
              border: "9px",
              height: "160px",
              padding: "1rem",
              textAlign: "center",
              margin: "5px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
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
              sx={{ fontWeight: "600" }}
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
            elevation={3}
            sx={{
              marginLeft: "20px",
              width: "350px",
              border: "9px",
              height: "160px",
              padding: "1rem",
              textAlign: "center",
              margin: "5px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
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
              sx={{ fontWeight: "600" }}
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
              marginLeft: "20px",
              width: "350px",
              border: "9px",
              height: "160px",
              padding: "1rem",
              textAlign: "center",
              margin: "5px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
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
              sx={{ fontWeight: "600" }}
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
