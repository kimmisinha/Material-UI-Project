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
          variant="h7"
          component="h3"
          sx={{ fontWeight: 900, marginTop: "200px", padding: "10px" }}
        >
          Co-Working
        </Typography>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
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
            paddingTop: "10px",
          }}
        >
          Put the potentially record low maximum sea ice extent this year down <br />
          to low ice.
          According to the National Oceanic and Atmospheric <br />
          Administration, Ted, Scambos.
        </Typography>
      </Box>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} style={{ padding: "60px", textAlign: "center",  border: '0px solid grey' }}>
          {/* <Paper elevation={3} style={{ padding: "20px", textAlign: "center",  border: '0px solid grey' }}> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(38,50,56)",
                margin: "0 auto",
                marginBottom: "10px",
                border: '0px solid grey' 
              }}
            >
              <BarChartIcon style={{ color: "white", fontSize: "2em" }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Excellent Services
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgb(96 125 139 / 59%)", fontSize: "16px",padding:"15px" }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ padding: "60px", textAlign: "center", border: "none" }}>
          {/* <Paper elevation={3} style={{ padding: "20px", textAlign: "center", border: "none" }}> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(38,50,56)",
                margin: "0 auto",
                marginBottom: "10px",
              }}
            >
              <TrendingUpIcon style={{ color: "white", fontSize: "2em" }} />
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Grow Your Market
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgb(96 125 139 / 59%)", fontSize: "16px",padding:"15px" }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ padding: "60px", textAlign: "center", border: "none" }}>
          {/* <Paper elevation={3} style={{ padding: "20px", textAlign: "center", border: "none" }}> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "rgb(38,50,56)",
                margin: "0 auto",
                marginBottom: "10px",
              }}
            >
              <TrendingDownIcon style={{ color: "white", fontSize: "2em" }} />
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Launch Time
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgb(96 125 139 / 59%)", fontSize: "16px",padding:"15px" }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoWorking;
