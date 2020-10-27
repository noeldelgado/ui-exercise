import React from 'react';
import { Box, Hidden } from '@material-ui/core';

import NavUserInfo from './NavUserInfo';
import NavListItems from './NavListItems';
import NavListTags from './NavListTags';
import useStore from '../../store';
import logo from '../../logo.png';

export default function Nav() {
  const [globalStore] = useStore();

  return (
    <Box
      component="aside"
      border={1}
      borderTop={0}
      borderBottom={0}
      borderLeft={0}
      borderColor="divider"
    >
      <Box px={2}>
        <img src={logo} alt="logo" />
      </Box>
      <Hidden xsDown>
        <NavUserInfo model={globalStore.user} />
      </Hidden>
      <NavListItems />
      <NavListTags />
    </Box>
  );
}
