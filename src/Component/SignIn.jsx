import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";
import Black from "../assets/Black.webp";

const SignIn = () => {
  // Custom styles for checkbox
  const checkboxStyle = {
    '& .MuiCheckbox-root': {
      color: 'black', // Color of the checkbox when unchecked
    },
    '& .Mui-checked': {
      color: 'black', // Color of the checkbox when checked
    },
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            flex: 1,
            marginRight: "50px",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold", marginLeft: "190px" }}
          >
            Sign In
          </Typography>
          <Typography gutterBottom fontSize="19px">
            Enter your email and password to sign in.
          </Typography>
          <label style={{ marginTop: "20px" }}>Your email</label>
          <TextField
            label="Your email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <label style={{ marginTop: "20px" }}>Password</label>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox sx={checkboxStyle} />}
            label={
              <Typography variant="body2">
                I agree to the <Link href="#" sx={{ color: 'black' }}>Terms and Conditions</Link>
              </Typography>
            }
          />
          <Button
            fullWidth
            sx={{
              mt: 2,
              mb: 2,
              color: "white",
              backgroundColor: "black", // Button color
              '&:hover': {
                backgroundColor: "black", // Button hover color
              },
            }}
          >
            Sign In
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account? <Link href="#" sx={{ color: 'black' }}>Register Now</Link>
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            position: "relative",
          }}
        >
          <img
            src={Black}
            alt="Sign In"
            style={{
              width: "105%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              marginTop: "20px",
              marginLeft: "70px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
