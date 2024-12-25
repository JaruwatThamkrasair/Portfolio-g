import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import HTML from '../assets/HTML5_Badge.png';
import CSS from '../assets/CSS3_logo.svg';
import ReactJs from '../assets/React-logo.webp';
import NextJs from '../assets/nextjs.jpeg';
import NestJs from '../assets/Nest.png';
import MySQL from '../assets/mysql.webp';
import MSSQL from '../assets/mssql.webp';
import muiReact from '../assets/muilogo.png';
import Prisma from '../assets/prisma.webp';
import Tailwind from '../assets/Tailwind-logo.webp';
import Bootstrap from '../assets/Bootstrap-logo.webp';
const Skill = () => {
  const skills = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "ReactJs", icon: ReactJs },
    { name: "NextJs", icon: NextJs },
    { name: "NestJs", icon: NestJs },
    { name: "MySQL", icon: MySQL },
    { name: "MSSQL", icon: MSSQL },
    { name: "muiReact", icon: muiReact },
    { name: "Prisma", icon: Prisma },
    { name: "Tailwind", icon: Tailwind },
    { name: "Bootstrap", icon: Bootstrap },
  ];

  return (
    <Box id='Skills' sx={{ py: 8, textAlign: "center", backgroundColor: "Black" }}>
      <Typography variant="h4" gutterBottom color="white" mb={5}>
       MY SKILLS
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={2}>
            <Avatar
            className="hovericon"
              alt={skill.name}
              src={skill.icon}
              sx={{
                width: 64,
                height: 64,
                mx: "auto",
                mb: 2,
                backgroundColor: "black",
              }}
            />
            <Typography variant="subtitle1" color="white">{skill.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;
