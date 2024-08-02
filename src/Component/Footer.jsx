import React from "react";
import { Container, Typography, Box, Link, Grid } from "@mui/material";
import YoutubeSearchedForRoundedIcon from "@mui/icons-material/YoutubeSearchedForRounded";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from '@mui/material/Divider';


const Footer = () => {
  return (
    <Container
      maxWidth={false}
      style={{ marginTop: "160px" }}
      sx={{
        width: "100%",
        backgroundColor: "rgb(255,255,255)",
        padding: "0px",
      }}
    >
      <Grid container spacing={10} sx={{ margin: "auto" }}>
        <Grid item xs={12} sm={4} sx={{ padding: 10 }}>
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
            sx={{ fontSize: 16 }}
          >
            Easy to use React components for
            <br />
            Tailwind CSS and Material Design.
          </Typography>
          <Box sx={{ display: "flex", mt: 1, padding: "10px 0px 0px 30px" }}>
            <Link sx={{ mr: 2, cursor: "pointer", textDecoration: "none" }}>
              <TwitterIcon sx={{ fontSize: 20, color: "text.secondary" }} />
            </Link>
            <Link sx={{ mr: 2, cursor: "pointer", textDecoration: "none" }}>
              <YoutubeSearchedForRoundedIcon
                sx={{ fontSize: 20, color: "text.secondary" }}
              />
            </Link>
            <Link sx={{ mr: 2, cursor: "pointer", textDecoration: "none" }}>
              <OfflineBoltRoundedIcon
                sx={{ fontSize: 20, color: "text.secondary" }}
              />
            </Link>
            <Link sx={{ mr: 2, cursor: "pointer", textDecoration: "none" }}>
              <GitHubIcon sx={{ fontSize: 20, color: "text.secondary" }} />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 1, fontWeight: "bold", fontSize: 16 }}
          >
            Useful Links
          </Typography>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" }}
          >
            About Us
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" }}
          >
            Blog
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" }}
          >
            Github
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" }}
          >
            Free Products
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 1, fontWeight: "bold", fontSize: 16 }}
          >
            Other Resources
          </Typography>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" }}
          >
            MIT License
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" }}
          >
            Contribute
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" }}
          >
            Change Log
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </Grid>
      </Grid>
      {/* 1 */}
      <Divider sx={{ width: "89%", margin: "0 auto",}} />
      {/* <Box sx={{ borderTop: 1, borderColor: "divider", mt: 4, mx:'auto', w:'75%' }} /> */}
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 2 }}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          Material Tailwind by Creative Tim
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
};

export default Footer;
