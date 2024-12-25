import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import reacticon from '../assets/React-logo.webp';
import expressicon from '../assets/express-js.png';
import nesticon from '../assets/Nest.png';
import Phpicon from "../assets/php.png";
const Projects = () => {
  return (
    <Box id='Portfolio' sx={{ py: 8, textAlign: "center", backgroundColor: "Black" }}>
      <Typography variant="h4" gutterBottom color="white" >
       MY PROJECTS
      </Typography>
      <Typography variant="body1" color="white">This is a selection of projects that can be publicly showcased</Typography>

    <Typography variant="body1" color="white">I have experience developing an intranet project for document storage and workflow-based document submission to various departments within an office.</Typography>
<Typography variant="body1" mb={10} color="white">I have experience creating APIs for integration with third-party platforms such as Salesforce, Monday.com, and ServiceDesk.</Typography>
      <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
          <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "30vh",
        }}
      >
        <Typography variant="h5" color="white">
          Carbon Footprint Dashboard
        </Typography>
        <Typography variant="body1" color="white" sx={{ textAlign: "center", mt: 2 }}>
          Website for Showing Data Carbon Footprint, Created by Frontend React and Backend Nodejs Express
        </Typography>
        <Box sx={{ mt: 2 }}>
        <img src={reacticon} width={70} alt="reactjs" ></img>

        <img src={expressicon} width={70} alt="reactjs" ></img>
      
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/yxUv0bmSDPk?si=5_6gpKrR5azHB_je"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Box>
    <Typography variant="body1" color="white"></Typography>
      </Grid>

      <Grid item xs={12} md={6}>
          <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "30vh",
        }}
      >
<iframe width="560" height="400" src="https://www.youtube.com/embed/NLwFtgrZogM?si=WpmbhMeb0-Yf7GjC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "30vh",
        }}
      >
    <Typography variant="h5" color="white">
          AIMAROI @ TU
        </Typography>
        <Typography variant="body1" color="white" sx={{ textAlign: "center", mt: 2 }}>
        Website Serve Restaurant for Thammasat Sport Festival, Created by Frontend React and Backend Nestjs
        </Typography>
        <Box sx={{ mt: 2 }}>
        <img src={reacticon} width={70} alt="reactjs" ></img>

        <img src={nesticon} width={70} alt="reactjs" ></img>
      
        </Box>
      </Box>
    <Typography variant="body1" color="white"></Typography>
      </Grid>

      <Grid item xs={12} md={6}>
          <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "30vh",
        }}
      >
        <Typography variant="h5" color="white">
          CCTV Inventory
        </Typography>
        <Typography variant="body1" color="white" sx={{ textAlign: "center", mt: 2 }}>
          Website Inventory CRUD Data and Interface Servicedesk for Notification Camera Offline Created by Frontend React and Backend PHP
        </Typography>
        <Box sx={{ mt: 2, display:'flex', alignContent:'center', alignItems:'center' }}>
        <img src={reacticon} width={70} alt="reactjs" ></img>

        <img src={Phpicon} width={70} alt="reactjs" ></img>
      
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/xNMRqd3_LK8?si=F9ZR5Xg06bq-pGnD" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Box>
    <Typography variant="body1" color="white"></Typography>
      </Grid>

      </Grid>
    </Box>
  );
};

export default Projects;
