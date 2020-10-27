import React from 'react';
import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import NavUserInfo from './NavUserInfo';
import { getNavFilterIcon } from './utils';
import { NAV_FILTER_ITEMS } from '../../utils/constants';
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
      <Box px={2}>
        <img src={logo} alt="logo" />
      </Box>

      <NavUserInfo model={globalStore.user} />

      <List>
        {Object.keys(NAV_FILTER_ITEMS).map((key) => (
          <ListItem
            key={key}
            component="li"
            button
            dense
            onClick={() => globalActions.setVisibilityFilter(key)}
          >
            <ListItemIcon>{getNavFilterIcon(key)}</ListItemIcon>
            <ListItemText primary={key} />
            <Box mr={1}>
              <Badge badgeContent={1} />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
