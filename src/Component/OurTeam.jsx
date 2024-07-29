import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Avatar, IconButton } from '@mui/material';
import { Twitter, LinkedIn, Facebook } from '@mui/icons-material';
import team1 from "../assets/team-1.jpg"
import team2 from "../assets/team-2.jpg"
import team3 from "../assets/team-3.jpg"
import team4 from "../assets/team-4.webp"
const teamMembers = [
  {
    name: 'Ryan Tompson',
    title: 'Web Developer',
    image: team1,
    socials: [<Twitter />, <LinkedIn />, <Facebook />],
  },
  {
    name: 'Romina Hadid',
    title: 'Marketing Specialist',
    image: team2,
    socials: [<Twitter />, <LinkedIn />, <Facebook />],
  },
  {
    name: 'Alexa Smith',
    title: 'UI/UX Designer',
    image: team3,
    socials: [<Twitter />, <LinkedIn />, <Facebook />],
  },
  {
    name: 'Jenna Kardi',
    title: 'Founder and CEO',
    image: team4,
    socials: [<Twitter />, <LinkedIn />, <Facebook />],
  },
];

const OurTeam = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" sx={{ py: 5 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="h4" component="h3" gutterBottom>
          Here are our heroes
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scientist, puts the potentially record maximum.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.title}
                </Typography>
                <Box mt={2} display="flex" justifyContent="center">
                  {member.socials.map((icon, index) => (
                    <IconButton key={index} aria-label="social icon">
                      {icon}
                    </IconButton>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurTeam;
