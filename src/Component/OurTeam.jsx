import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Twitter, LinkedIn, Facebook } from "@mui/icons-material";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.webp";

const teamMembers = [
  {
    name: "Ryan Tompson",
    title: "Web Developer",
    image: team1,
    socials: [
      <Twitter sx={{ color: "rgb(49,151,243)" }} />,
      <LinkedIn sx={{ color: "rgb(49,151,243)" }} />,
      <Facebook sx={{ color: "red" }} />,
    ],
  },
  {
    name: "Romina Hadid",
    title: "Marketing Specialist",
    image: team2,
    socials: [
      <Twitter sx={{ color: "rgb(49,151,243)" }} />,
      <LinkedIn sx={{ color: "rgb(49,151,243)" }} />,
      <Facebook sx={{ color: "red" }} />,
    ],
  },
  {
    name: "Alexa Smith",
    title: "UI/UX Designer",
    image: team3,
    socials: [
      <Twitter sx={{ color: "rgb(49,151,243)" }} />,
      <LinkedIn sx={{ color: "rgb(49,151,243)" }} />,
      <Facebook sx={{ color: "red" }} />,
    ],
  },
  {
    name: "Jenna Kardi",
    title: "Founder and CEO",
    image: team4,
    socials: [
      <Twitter sx={{ color: "rgb(49,151,243)" }} />,
      <LinkedIn sx={{ color: "rgb(49,151,243)" }} />,
      <Facebook sx={{ color: "red" }} />,
    ],
  },
];

const OurTeam = () => {
  return (
    <Container maxWidth={"xl"} style={{ width: "100%" }}>
      <Box textAlign="center" sx={{ py: 5, marginTop: "0px" }}>
        <Typography
          variant="h7"
          component="h3"
          gutterBottom
          sx={{ fontWeight: "600" }}
        >
          Our Team
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}
        >
          Here are our heroes
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
          According to the National Oceanic and Atmospheric Administration,
          <br />
          Ted, Scambos, NSIDC lead scientist, puts the potentially record
          <br />
          maximum.
        </Typography>
      </Box>
      <Grid container spacing={7} sx={{ padding: "0px 30px 0px 30px" }}>
        {teamMembers.map((member, index) => (
          <Grid item md={3} key={index} margin={"0px"}>
            <CardMedia
              component="img"
              height="290"
              width="400"
              image={member.image}
              alt={member.name}
              margin="20px"
              marginTop="25px"
              sx={{ borderRadius: "10%" }} 

            />
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" ,textAlign:"center"}}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "rgb(96 125 139 / 59%)",textAlign:"center" }}
              >
                {member.title}
              </Typography>
              <Box mt={4} display="flex" justifyContent="center">
                {member.socials.map((icon, index) => (
                  <IconButton key={index} aria-label="social icon">
                    {icon}
                  </IconButton>
                ))}
              </Box>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurTeam;
