import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
const Contact = () => {
  const Tools = [
    { name: "jaruwat.tks@gmail.com", icon: <MailIcon fontSize="large"/> },
    { name: "097-130-2225", icon: <PhoneIphoneIcon fontSize="large"/>},
  ];

  return (
    <Box className='box' id='Contact' sx={{ py: 8, textAlign: "center", backgroundColor: "white" }}>
     <Typography variant="h4" gutterBottom color="black" mb={5}>
       Contact Me
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {Tools.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={2}>
            {skill.icon}
            <Typography variant="subtitle1" color="black">{skill.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
