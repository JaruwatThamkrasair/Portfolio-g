import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Profile = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        flexDirection: "column",
        p: 4,
      }}
    >
   
        <Typography variant="h2" gutterBottom>
          Hello, I'm Jaruwat Thamkrasair
        </Typography>
        <Typography variant="h5" paragraph className="textLoading">
          
        </Typography>
        <a href="public/Jaruwat_Thamkrasair(EN).pdf">
        <Button variant="contained" color="error" size="large" sx={{ mt: 3 }}>
          <Typography variant="body1" color="white">My Resume</Typography>
        </Button>
        </a>
  
    </Box>
  );
};

export default Profile;
