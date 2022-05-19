import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Home from './pages/Home';
import React from 'react';






export default function Appbar() {
  return (
      <div>
      <Box>
    <Box sx={{ flexGrow: 1,width:"700px",height:"700px" }}>
        <Grid container justifyContent="center">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Bank Account Information
          </Typography>
        </Toolbar>
      </AppBar>
      </Grid>
      <br/>&nbsp;
      <Home/>
    </Box>
    </Box>
    
    </div>
  );
}
