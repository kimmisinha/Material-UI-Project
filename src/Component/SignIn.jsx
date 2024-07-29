import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Container, Box, Link, Grid, Divider } from '@mui/material';

const SignIn = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mt: 4,
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#000',
            display: { xs: 'none', md: 'block' }
          }}
        >
          {/* Placeholder for the image */}
        </Box>
        <Box
          sx={{
            flex: 1,
            p: 4
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            Join Us Today
          </Typography>
          <Typography variant="body1" gutterBottom>
            Enter your email and password to register.
          </Typography>
          <TextField
            label="Your email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="body2">
                I agree the <Link href="#">Terms and Conditions</Link>
              </Typography>
            }
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, mb: 2 }}>
            Register Now
          </Button>
          <Divider sx={{ mb: 2 }}>or</Divider>
          <Button variant="outlined" fullWidth sx={{ mb: 1 }}>
            Sign in with Google
          </Button>
          <Button variant="outlined" fullWidth>
            Sign in with Twitter
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? <Link href="#">Sign in</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;