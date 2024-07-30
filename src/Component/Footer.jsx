import React from "react";
import { Container, Typography, Box, Link, Grid } from "@mui/material";
import YoutubeSearchedForRoundedIcon from "@mui/icons-material/YoutubeSearchedForRounded";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 20,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Material Tailwind
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: 16, color: "text.secondary" }}
            >
              Easy to use React components for
              <br />
              Tailwind CSS and Material Design.
            </Typography>
            <Box sx={{ display: "flex", mt: 1 }}>
              <Link href="#" sx={{ mr: 2 }}>
                <TwitterIcon sx={{ fontSize: 20, color: "text.secondary" }} />
              </Link>
              <Link href="#" sx={{ mr: 2 }}>
                <YoutubeSearchedForRoundedIcon
                  sx={{ fontSize: 20, color: "text.secondary" }}
                />
              </Link>
              <Link href="#" sx={{ mr: 2 }}>
                <OfflineBoltRoundedIcon
                  sx={{ fontSize: 20, color: "text.secondary" }}
                />
              </Link>
              <Link href="#" sx={{ mr: 2 }}>
                <GitHubIcon sx={{ fontSize: 20, color: "text.secondary" }} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h9" component="div" marginLeft="200px">
              Useful Links
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              marginLeft="200px"
              display="block"
            >
              About Us
            </Link>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              marginLeft="200px"
              display="block"
            >
              Blog
            </Link>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              marginLeft="200px"
              display="block"
            >
              Github
            </Link>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              marginLeft="200px"
              display="block"
            >
              Free Products
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h9" component="div" marginLeft="200px">
              Other Resources
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              marginLeft="200px"
              display="block"
            >
              MIT License
            </Link>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              marginLeft="200px"
              display="block"
            >
              Contribute
            </Link>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              marginLeft="200px"
              display="block"
            >
              Change Log
            </Link>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              marginLeft="200px"
              display="block"
            >
              Contact Us
            </Link>
          </Grid>
        </Grid>
        <hr marginTop="20px" />
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          {"Copyright © "}
          <Link color="inherit" href="#">
            Material Tailwind by Creative Tim
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
