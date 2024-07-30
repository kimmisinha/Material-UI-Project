import React from 'react';
import { Avatar, Box, Typography, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

function Profile() {
  return (
    
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
          <Avatar
            src="https://via.placeholder.com/150" // Replace with the actual image URL
            alt="Profile Picture"
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h5">Jenna Stones</Typography>
          <Typography variant="subtitle1">jena@mail.com</Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2" color="textSecondary" ml={1}>
              Los Angeles, California
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <WorkIcon fontSize="small" />
            <Typography variant="body2" color="textSecondary" ml={1}>
              Solution Manager - Creative Tim Officer
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <SchoolIcon fontSize="small" />
            <Typography variant="body2" color="textSecondary" ml={1}>
              University of Computer Science
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" mt={2}>
            An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs, and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="button" display="block" gutterBottom>
            SHOW MORE
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Profile;