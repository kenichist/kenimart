import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import CreatePage from './pages/CreatePage.jsx';
import Homepage from './pages/Homepage.jsx';
import Navbar from './components/Navbar.jsx'

function App() {
  
  return (
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Homepage />} />
          <Route path="/create" element = {<CreatePage />} />
        </Routes>
      </Box>
  );
}

export default App
