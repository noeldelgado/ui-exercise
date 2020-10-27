import React from 'react';
import { Box, Button, Divider, Hidden } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import NavUserInfo from './NavUserInfo';
import NavListItems from './NavListItems';
import NavListTags from './NavListTags';
import useStore from '../../store';
import logo from '../../logo.png';

const useStyles = makeStyles((theme) => ({
  overflow: {
    overflow: 'auto',
    height: '100%',
    paddingBottom: theme.spacing(2),
  },
}));

export default function Nav() {
  const [globalStore, globalActions] = useStore();
  const classes = useStyles();

  return (
    <Box
      component="aside"
      border={1}
      borderTop={0}
      borderBottom={0}
      borderLeft={0}
      borderColor="divider"
    >
      <Box px={2} height={46} display="flex" alignItems="center">
        <img src={logo} alt="logo" />
      </Box>
      <Divider />
      <Box className={classes.overflow}>
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
        <Box px={2}>&nbsp;</Box>
      </Box>
    </Box>
  );
}
