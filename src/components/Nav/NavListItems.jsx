import React from 'react';
import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';

import { getNavFilterIcon } from './utils';
import { NAV_FILTER_ITEMS } from '../../utils/constants';
import useStore from '../../store';

export default function NavListItems() {
  const [, globalActions] = useStore();

  return (
    <List subheader={<ListSubheader>Mailboxes</ListSubheader>}>
      {Object.keys(NAV_FILTER_ITEMS).map((key) => (
        <ListItem
          key={key}
          component="li"
          onClick={() => globalActions.setVisibilityFilter(key)}
          button
          dense
        >
          <ListItemIcon>{getNavFilterIcon(key)}</ListItemIcon>
          <ListItemText primary={key} />
          <Box mr={1}>
            <Badge badgeContent={1} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
