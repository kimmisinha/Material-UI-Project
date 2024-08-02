import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import teamwork from "../assets/teamwork.webp";

// Define the styled components
const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "40vh",
  padding: "4rem 0",
  marginTop: "70px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const BoxLeft = styled(Box)(({ theme }) => ({
  flex: "1 1 50%",
  [theme.breakpoints.down("md")]: {
    flex: "1 1 100%",
  },
}));

const BoxRight = styled(Box)(({ theme }) => ({
  flex: "1 1 33%",
  [theme.breakpoints.down("md")]: {
    flex: "1 1 100%",
    marginTop: "2rem",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  maxWidth: "100%",
  objectFit: "cover",
  height: "200px",
  borderRadius: "5px",
}));

const TeamPage = () => {
  const theme = useTheme();

  return (
    <StyledContainer maxWidth="lg">
      <BoxLeft>
        <Box
          sx={{
            backgroundColor: "black",
            display: "inline-block",
            padding: "0.5rem",
            borderRadius: "50%",
            marginBottom: "1rem",
            marginTop: "60px",
          }}
        >
          <FingerprintIcon fontSize="large" sx={{ color: "white" }} />
        </Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Working with us is a pleasure
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: "rgb(96 125 139 / 59%)" }}
        >
          Don’t let your users guess by attaching tooltips and popovers to any
          element. Just make sure you enable them first via JavaScript.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: "rgb(96 125 139 / 59%)" }}
        >
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you’re good to go.
          Just make sure you enable them first via JavaScript.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "0.75rem",
            padding: "0.5rem 1rem",
            backgroundColor: "rgb(33,33,33)",
            "&:hover": {
              backgroundColor: "rgb(66,66,66)",
            },
          }}
        >
          Read More
        </Button>
      </BoxLeft>
      <BoxRight>
        <Card>
          <StyledCardMedia
            component="img"
            height="200"
            image={teamwork}
            alt="Top Notch Services"
          />
          <CardContent>
            <Typography
              variant="subtitle2"
              color="rgb(38 50 56 / var(--tw-text-opacity))"
            >
              Enterprise
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "600" }}
            >
              Top Notch Services
            </Typography>
            <Typography
              variant="body2"
              color="rgb(96 125 139 / 59%)"
              lineHeight="1.625"
              fontSize="15px"
              paddingTop="4px"
            >
              The Arctic Ocean freezes every winter and much of the sea-ice
              then thaws every summer, and that process will continue whatever
              happens.
            </Typography>
          </CardContent>
        </Card>
      </BoxRight>
    </StyledContainer>
  );
};

export default TeamPage;
