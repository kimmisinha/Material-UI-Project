import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import teamwork from "../assets/teamwork.webp";
import { useTheme } from "@mui/material/styles";

const TeamPage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "40vh",
          padding: "4rem 0",
          marginTop: "70px",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem 0",
          },
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
              marginBottom: "2rem",
            },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            margin="0px 0px -35px 0px"
            sx={{
              [theme.breakpoints.down("md")]: {
                margin: "0px 0px -0px 10px",
                // text-align: center;
                textAlign:"center",

              },
            }}
          >
            Working with us is a pleasure
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
                paddingTop:"20px"

              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
                display: "block",
                borderRadius: "50%",
                marginBottom: "10px",
                marginRight: "40px",
                [theme.breakpoints.down("md")]: {
                  marginBottom: "40px",
                },
              }}
            >
              <FingerprintIcon fontSize="large" sx={{ color: "white" }} />
            </Box>
          </Box>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "rgb(96 125 139 / 59%)",
              paddingTop: "10px",
              [theme.breakpoints.down("md")]: {
                paddingTop: "5px",
              },
            }}
          >
            Don’t let your users guess by attaching tooltips and popovers to any
            element.
            <br />
            Just make sure you enable them first via JavaScript.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "rgb(96 125 139 / 59%)",
            }}
          >
            The kit comes with three pre-built pages to help you get started
            faster.
            <br />
            You can change the text and images and you’re good to go.
            <br />
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
              [theme.breakpoints.down("md")]: {
                margin: "1rem auto 0",
              },
            }}
          >
            Read More
          </Button>
        </Box>

        <Box
          sx={{
            maxWidth: "33%",
            [theme.breakpoints.down("md")]: {
              maxWidth: "80%",
              margin: "0 auto",
            },
          }}
        >
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={teamwork}
              borderRadius="5"
              sx={{
                maxWidth: "90%",
                objectFit: "cover",
                height: "140",
                marginTop: "10px",
                marginLeft: "20px",
                borderRadius: "5px",
                [theme.breakpoints.down("md")]: {
                  marginLeft: "auto",
                  marginRight: "auto",
                },
              }}
              alt="Top Notch Services"
            />
            <CardContent>
              <Typography
                variant="subtitle2"
                color="rgb(38 50 56/var(--tw-text-opacity))"
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
        </Box>
      </Box>
    </Container>
  );
};

export default TeamPage;
