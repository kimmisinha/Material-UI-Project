import React from 'react';
import { Container, Typography, Box, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div">
              Material Tailwind
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Easy to use React components for Tailwind CSS and Material Design.
            </Typography>
            <Box sx={{ display: 'flex', mt: 1 }}>
              <Link href="#" sx={{ mr: 1 }}>
                <img src="/path/to/twitter-icon.png" alt="Twitter" />
              </Link>
              <Link href="#" sx={{ mr: 1 }}>
                <img src="/path/to/youtube-icon.png" alt="YouTube" />
              </Link>
              <Link href="#" sx={{ mr: 1 }}>
                <img src="/path/to/instagram-icon.png" alt="Instagram" />
              </Link>
              <Link href="#" sx={{ mr: 1 }}>
                <img src="/path/to/github-icon.png" alt="GitHub" />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div">
              Useful Links
            </Typography>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              About Us
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              Blog
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              Github
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              Free Products
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div">
              Other Resources
            </Typography>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              MIT License
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              Contribute
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              Change Log
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              Contact Us
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
          {'Copyright © '}
          <Link color="inherit" href="#">
            Material Tailwind by Creative Tim
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;