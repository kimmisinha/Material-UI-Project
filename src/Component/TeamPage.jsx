import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button, Card, CardContent, CardMedia } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import teaamwork from "../assets/teamwork.webp"
const TeamPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '40vh',
          padding: '4rem 0',
        }}
      >
        <Box sx={{ maxWidth: '50%' }}>
          <FingerprintIcon fontSize="large" sx={{ marginBottom: '1rem' }} />
          <Typography variant="h4" component="h2" gutterBottom>
            Working with us is a pleasure
          </Typography>
          <Typography variant="body1" paragraph>
            Don't let your uses guess by attaching tooltips and popovers to any element. Just make sure you enable them first via JavaScript.
          </Typography>
          <Typography variant="body1" paragraph>
            The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.
          </Typography>
          <Button variant="contained" color="primary">
            Read More
          </Button>
        </Box>
        <Box sx={{ maxWidth: '36%' }}>
          <Card>
            <CardMedia 
              component="img"
              height="200"
              image={teaamwork}
              alt="Top Notch Services"
            />
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                Enterprise
              </Typography>
              <Typography variant="h5" component="div">
                Top Notch Services
              </Typography>
              <Typography variant="body2" color="textSecondary">
                The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default TeamPage;
