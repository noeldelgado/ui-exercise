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
import { makeStyles } from '@material-ui/core/styles';

import { getNavFilterIcon, getNavFilterUnreadCounter } from './utils';
import { capitalize } from '../../utils';
import { NAV_FILTER_ITEMS } from '../../utils/constants';
import useStore from '../../store';

const useStyles = makeStyles((theme) => ({
  listItemIcon: {
    minWidth: theme.spacing(4),
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavListItems() {
  const [globalStore, globalActions] = useStore();
  const classes = useStyles();

  return (
    <List
      subheader={<ListSubheader>Mailboxes</ListSubheader>}
      className={classes.list}
    >
      {Object.keys(NAV_FILTER_ITEMS).map((key) => (
        <ListItem
          key={key}
          selected={globalStore.filter === key}
          component="li"
          onClick={() => globalActions.app.setVisibilityFilter(key)}
          button
          dense
        >
          <ListItemIcon classes={{ root: classes.listItemIcon }}>
            {getNavFilterIcon(key)}
          </ListItemIcon>
          <ListItemText primary={capitalize(key)} />
          <Box mr={1}>
            <Badge
              badgeContent={getNavFilterUnreadCounter(
                key,
                globalStore.emails,
                globalStore.user,
              )}
            />
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
