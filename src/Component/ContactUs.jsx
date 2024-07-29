import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Container, Box } from '@mui/material';

const ContactUs = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Want to work with us?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Complete this form and we will get back to you in 24 hours.
        </Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body2">
              I agree the <a href="#terms">Terms and Conditions</a>
            </Typography>
          }
        />
        <Button variant="contained" color="primary">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;