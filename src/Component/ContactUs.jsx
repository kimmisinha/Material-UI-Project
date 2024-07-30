import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Box,
} from "@mui/material";

const ContactUs = () => {
  const freeDownloadButtonStyle = {
    fontSize: "13px",
    marginTop: "13px",
    backgroundColor: "#2B2B2B",
    color: "white",
    width: "560px",
    hight:"300px"
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 600, marginTop: "250px" }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Want to work with us?
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
              I agree the Terms and Conditions 
            </Typography>
          }
        />
        <Button
          variant="contained"
          color="primary"
          style={freeDownloadButtonStyle}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
