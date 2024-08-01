import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Box,
  Grid,
} from "@mui/material";

const ContactUs = () => {
  const freeDownloadButtonStyle = {
    fontSize: "13px",
    marginTop: "13px",
    backgroundColor: "#2B2B2B",
    color: "white",
    width: "560px",
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
          variant="h7"
          component="h3"
          gutterBottom
          sx={{ fontWeight: 900, marginTop: "100px" }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="rgb(38,50,56)"
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        {/* Applied alignItems: "start" to the parent Box of Checkbox and Label */}
        <Box sx={{ alignItems: "stretch",flex:"start" }}>
          <FormControlLabel 
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label={
              <Typography variant="body2">
                I agree to the Terms and Conditions
              </Typography>
            }
          />
        </Box>
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
