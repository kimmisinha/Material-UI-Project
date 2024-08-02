import React from "react";
import { Container, Typography, Box, Link, Grid } from "@mui/material";
import YoutubeSearchedForRoundedIcon from "@mui/icons-material/YoutubeSearchedForRounded";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <Container
      maxWidth={"xl"}
      style={{ marginTop: "200px" }}
      sx={{
        backgroundColor: "rgb(255,255,255)",
        padding: "0px",
      }}
    >
      <Grid container spacing={10}>
        <Grid item xs={12} sm={4} sx={{ padding: 10 }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 600, padding: "10px 0px 0px 30px" }}
          >
            Material Tailwind
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 16, padding: "10px 0px 0px 30px" }}
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
        <Grid item xs={12} sm={4} >
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 1, fontWeight: "bold", fontSize: 16, paddingLeft: "300px" }}
          >
            Useful Links
          </Typography>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" ,paddingLeft: "300px"}}
          >
            About Us
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" ,paddingLeft: "300px"}}
          >
            Blog
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" ,paddingLeft: "300px"}}
          >
            Github
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none",paddingLeft: "300px" }}
          >
            Free Products
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 1, fontWeight: "bold", fontSize: 16 ,paddingLeft: "100px"}}
          >
            Other Resources
          </Typography>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none",paddingLeft: "100px" }}
          >
            MIT License
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none",paddingLeft: "100px" }}
          >
            Contribute
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none" ,paddingLeft: "100px"}}
          >
            Change Log
          </Link>
          <Link
            variant="body2"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5, cursor: "pointer", textDecoration: "none",paddingLeft: "100px" }}
          >
            Contact Us
          </Link>
        </Grid>
      </Grid>
      {/* 1 */}
      <Divider sx={{ width: "95%" }} />
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
