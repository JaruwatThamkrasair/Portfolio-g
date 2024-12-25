import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import ProfileImage from "../assets/Profile.jpg";
const About = () => {
  return (
    <Box id='Profile' className='box' sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" gutterBottom>
        ABOUT ME
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Avatar
            alt="Jaruwat Thamkrasair"
            src={ProfileImage}
            sx={{ width: 150, height: 150, mx: "auto" }}
            className="hovericon"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" paragraph>
          I'm a  Full-Stack Developer Proficient in both Frontend and Backend development, with expertise in frameworks and libraries such as
 React.js, Next.js, Nest.js, MySQL, MSSQL, and Prisma. Experienced in developing basic websites and web
 applications tailored to organizational needs, including workflows and data management systems. Skilled in
 designing customized solutions to meet client requirements, with a strong commitment to delivering high
quality and efficient software.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
