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
  Divider,
} from "@mui/material";
import Black from "../assets/Black.webp";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();

  function handlesubmitsign() {
    Navigate("/signin");
  }
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          height: "100vh",
        }}
      >
        {/* Image Section */}
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
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              marginLeft: "-120px",
              marginTop: "30px",
            }}
          />
        </Box>

        {/* Form Section */}
        <Box
          sx={{
            flex: 1,
            marginLeft: "50px",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: " 100px 50px 100px 0px",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Join Us Today
          </Typography>
          <Typography
            gutterBottom
            fontSize="19px"
            sx={{ textAlign: "center", mb: 3, color: "rgb(69,79,84)" }}
          >
            Enter your email and password to register.
          </Typography>

          <Typography
            variant="body2"
            sx={{ marginTop: "20px", color: "rgb(69,79,84)" }}
          >
            Your email
          </Typography>
          <TextField
            label="Your email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ mb: 2 }}
          />

          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black", "&.Mui-checked": { color: "black" } }}
              />
            }
            label={
              <Typography variant="body2" sx={{ color: "black" }}>
                I agree to the{" "}
                <Link href="#" sx={{ color: "black" }}>
                  Terms and Conditions
                </Link>
              </Typography>
            }
          />

          <Button
            fullWidth
            sx={{
              mt: 2,
              mb: 2,
              color: "white",
              backgroundColor: "#2B2B2B",
              "&:hover": {
                backgroundColor: "#1f1f1f",
              },
            }}
          >
            Register Now
          </Button>

          <Divider sx={{ mb: 2 }}>or</Divider>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, color: "black" }}
          >
            Already have an account?{" "}
            <Link href="#" onClick={handlesubmitsign} sx={{ color: "black" }}>
              Sign in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
