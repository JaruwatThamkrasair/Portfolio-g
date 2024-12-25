import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import Postman from '../assets/postman-icon.svg';
import Docker from '../assets/docker.jpg';
import Visual from '../assets/vscode.webp';
const ToolsMenu = () => {
  const Tools = [
    { name: "Postman", icon: Postman },
    { name: "Docker", icon: Docker },
    { name: "Visual Studio Code", icon: Visual },
  ];

  return (
    <Box className='box' id='Tools' sx={{ py: 8, textAlign: "center", backgroundColor: "white" }}>
     <Typography variant="h4" gutterBottom color="black" mb={5}>
       TOOLS
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {Tools.map((skill, index) => (
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
            <Typography variant="subtitle1" color="black">{skill.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ToolsMenu;
