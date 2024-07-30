import React from "react";
import { Container, Box, Typography, Grid, Paper } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const CoWorking = () => {
  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{ fontWeight: 600, marginTop: "250px" }}
        >
          Co-Working
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Build something
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          sx={{
            fontSize: "20px",
            fontFamily: "Roboto, sans-serif",
            color: "rgb(96 125 139 / 59%)",
          }}
        >
          Put the potentially record low maximum sea ice extent this year down
          to low ice.
          <br />
          According to the National Oceanic and Atmospheric <br />Administration,
          Ted, Scambos.
        </Typography>
      </Box>
      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "black",
                margin: "0 auto",
                marginBottom: "10px",
              }}
            >
              <BarChartIcon style={{ color: "white", fontSize: "2em" }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Excellent Services
            </Typography>
            <Typography variant="body2" sx={{ color: "rgb(96 125 139 / 59%)", fontSize: "16px" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "black",
                margin: "0 auto",
                marginBottom: "10px",
              }}
            >
              <TrendingUpIcon style={{ color: "white", fontSize: "2em" }} />
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Grow Your Market
            </Typography>
            <Typography variant="body2" sx={{ color: "rgb(96 125 139 / 59%)", fontSize: "16px" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "black",
                margin: "0 auto",
                marginBottom: "10px",
              }}
            >
              <TrendingDownIcon style={{ color: "white", fontSize: "2em" }} />
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Launch Time
            </Typography>
            <Typography variant="body2" sx={{ color: "rgb(96 125 139 / 59%)", fontSize: "16px" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoWorking;
