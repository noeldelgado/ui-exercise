import React from 'react';
import { Box } from '@material-ui/core';

export default function LoadingScreen() {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      right={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box align="center" width={300}>
        Loading
      </Box>
    </Box>
  );
}
