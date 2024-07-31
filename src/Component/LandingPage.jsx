import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

const cardStyle = {
  maxWidth: 400,
  maxHeight: 210,
  textAlign: "center",
};

const iconStyle = {
  backgroundColor: "rgb(51,51,51)",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  marginTop: "20px",
};

const cardHeaderStyle = {
  color: "rgb(51,51,51)", 
  padding: "0px 40px 0px",
  fontSize: "1rem", 
  fontWeight: "700", 
};

const cardContentStyle = {
  padding: "0px 20px 0px", 
  marginTop:"-20px"
};

const textStyle = {
  color: "rgb(160,175,182)",
  fontFamily: "Roboto, sans-serif",
  textAlign: "center",
  margin: 0, // Remove margin
  padding: 0, // Remove padding
};

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
      <div style={{ padding: "0px 20px 0px 60px" }}>
        <Grid container sx={{ marginTop: "-7.5rem" }}>
          {["Awarded Agency", "Free Revisions", "Premium Quality"].map((title, index) => (
            <Grid item xs={12} sm={4} sx={{ padding: "10px" }} key={index}>
              <Card sx={cardStyle}>
                <Typography sx={iconStyle}>
                  <ChatIcon fontSize="small" sx={{ color: "white" }} />
                </Typography>
                <CardHeader
                  titleTypographyProps={{
                    sx: cardHeaderStyle,
                  }}
                  title={title}
                  component="h3"
                  variant="h4"
                />
                <CardContent sx={cardContentStyle}>
                  <Typography variant="body1" sx={textStyle}>
                    Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default LandingPage;
