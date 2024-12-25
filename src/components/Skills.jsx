import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";

const Skill = () => {
  const skills = [
    { name: "HTML", icon: '/HTML5_Badge.png' },
    { name: "CSS", icon: '/CSS3_logo.svg' },
    { name: "ReactJs", icon: '/React-logo.webp' },
    { name: "NextJs", icon: '/nextjs.jpeg' },
    { name: "NestJs", icon: '/Nest.png' },
    { name: "MySQL", icon: '/mysql.webp' },
    { name: "MSSQL", icon: '/mssql.webp' },
    { name: "muiReact", icon: '/muilogo.png' },
    { name: "Prisma", icon: '/prisma.webp' },
    { name: "Tailwind", icon: '/Tailwind-logo.webp' },
    { name: "Bootstrap", icon: '/Bootstrap-logo.webp' },
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
