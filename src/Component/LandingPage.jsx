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
          minHeight: "100vh",  // Adjusted to full viewport height
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          padding: "4rem 0",
          width: "100%"
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Your story starts with us.
        </Typography>
        <Typography variant="h6" component="p" maxWidth="md">
          This is a simple example of a Landing Page you can build using
          Material-UI. It features multiple components based on the Material
          Design by Google.
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: "2rem", textAlign: "center" }}>
            <ChatIcon fontSize="large" />
            <Typography variant="h6" component="h2" gutterBottom>
              Awarded Agency
            </Typography>
            <Typography variant="body1">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: "2rem", textAlign: "center" }}>
            <ChatIcon fontSize="large" />
            <Typography variant="h6" component="h2" gutterBottom>
              Free Revisions
            </Typography>
            <Typography variant="body1">
              Keep your user engaged by providing meaningful information.
              Remember that by this time, the user is curious.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: "2rem", textAlign: "center" }}>
            <ChatIcon fontSize="large" />
            <Typography variant="h6" component="h2" gutterBottom>
              Verified Company
            </Typography>
            <Typography variant="body1">
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
