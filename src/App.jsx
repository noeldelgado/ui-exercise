import React from 'react';
import { Box, Fade } from '@material-ui/core';

import LoadingScreen from './components/LoadingScreen';
import Nav from './components/Nav';

export default function App() {
  return (
    <>
      <Nav />
      <Box component="main">
        Main
      </Box>
      <Fade
        unmountOnExit
        in={false}
        timeout={{ enter: 0, exit: 200 }}
      >
        <Box>
          <LoadingScreen />
        </Box>
      </Fade>
    </>
  );
}
