import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";

const ToolsMenu = () => {
  const Tools = [
    { name: "Postman", icon: '/postman-icon.svg' },
    { name: "Docker", icon: '/docker.jpg' },
    { name: "Visual Studio Code", icon: '/vscode.webp' },
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
