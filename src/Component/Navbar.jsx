// src/components/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material Tailwind React
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Sign In</Button>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Docs</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
