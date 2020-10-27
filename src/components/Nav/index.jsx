import React from 'react';
import { Box, Button, Divider, Hidden } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';

import NavUserInfo from './NavUserInfo';
import NavListItems from './NavListItems';
import NavListTags from './NavListTags';
import useStore from '../../store';
import logo from '../../logo.png';

export default function Nav() {
  const [globalStore, globalActions] = useStore();

  return (
    <Box
      component="aside"
      border={1}
      borderTop={0}
      borderBottom={0}
      borderLeft={0}
      borderColor="divider"
    >
      <Box px={2} minHeight={46}>
        <Hidden smUp>
          <Box p={2} />
        </Hidden>
        <img src={logo} alt="logo" />
      </Box>
      <Divider />
      <Hidden xsDown>
        <NavUserInfo model={globalStore.user} />
        <Box py={2} px={2}>
          <Button
            disableElevation
            fullWidth
            variant="outlined"
            color="primary"
            startIcon={<AddRounded />}
            onClick={() => globalActions.app.setComposeEmailOpen(true)}
          >
            Compose
          </Button>
        </Box>
      </Hidden>
      <NavListItems />
      <NavListTags />
      <Box p={1}>&nbsp;</Box>
    </Box>
  );
}
