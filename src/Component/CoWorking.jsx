import React from 'react'
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const CoWorking = () => {
  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Typography variant="h4" gutterBottom>
          Build something
        </Typography>
        <Typography variant="body1">
          Put the potentially record low maximum sea ice extent this year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <BarChartIcon style={{ fontSize: '2em', marginBottom: '10px' }} />
            <Typography variant="h6" gutterBottom>
              Excellent Services
            </Typography>
            <Typography variant="body2">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <TrendingUpIcon style={{ fontSize: '2em', marginBottom: '10px' }} />
            <Typography variant="h6" gutterBottom>
              Excellent Services
            </Typography>
            <Typography variant="body2">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <TrendingDownIcon style={{ fontSize: '2em', marginBottom: '10px' }} />
            <Typography variant="h6" gutterBottom>
              Excellent Services
            </Typography>
            <Typography variant="body2">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoWorking;
