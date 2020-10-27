import React from 'react';
import { Box } from '@material-ui/core';

import logo from '../logo.png';

export default function Nav() {
  return (
    <Box
      component="aside"
      border={1}
      borderTop={0}
      borderBottom={0}
      borderLeft={0}
      borderColor="divider"
    >
      Nav
      <img src={logo} alt="logo" />
    </Box>
  );
}
