import React from "react";
import { Box } from "@mui/material";
import LandingPage from "./LandingPage";
import TeamPage from "./TeamPage";
import OurTeam from "./OurTeam";
import CoWorking from "./CoWorking";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <LandingPage />
      <TeamPage />
      <OurTeam />
      <CoWorking />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default Home;
