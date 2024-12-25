import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css'
import ResponsiveAppBar from './components/Navbar'
import Profile from './components/Profile';
import About from './components/About';
import Skill from './components/Skills';
import ToolsMenu from './components/Tools';
import Projects from './components/Projects';
import Contact from './components/Contact';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg' disableGutters>
      <ResponsiveAppBar/>
          <Profile/>
          <About/>
          <Skill/>
          <ToolsMenu/>
          <Projects/>
          <Contact/>
        </Container>
        </React.Fragment>
    </ThemeProvider>
  )
}

export default App
