import React from 'react';
import { Avatar, Box, IconButton, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  ArrowDropDownRounded,
  MenuRounded,
  SearchRounded,
} from '@material-ui/icons';

import useStore from '/src/store';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.spacing(1),
  },
}));

export default function Header() {
  const [globalState, globalActions] = useStore();
  const classes = useStyles();

  return (
    <Box
      component="header"
      display="flex"
      py={1}
      px={2}
      border={1}
      borderTop={0}
      borderRight={0}
      borderLeft={0}
      borderColor="divider"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" flexGrow={1} mr={2}>
        <Box display="flex" alignItems="center" mr={1}>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="open drawer"
            onClick={() => globalActions.app.setMobileNavOpen(true)}
          >
            <MenuRounded />
          </IconButton>
        </Box>

        <Box className={classes.root}>
          <InputBase
            fullWidth
            disabled
            startAdornment={
              <IconButton disabled aria-label="search">
                <SearchRounded />
              </IconButton>
            }
            endAdornment={
              <IconButton disabled aria-label="show search options">
                <ArrowDropDownRounded />
              </IconButton>
            }
            placeholder="Search email"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Box>
      </Box>

      <Box display="flex">
        <Avatar
          variant="circle"
          alt={globalState.user?.name}
          src={globalState.user?.avatar}
        >
          {globalState.user?.name?.split(' ').map((i) => i.charAt(0))}
        </Avatar>
      </Box>
    </Box>
  );
}
