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
import { LabelOutlined } from '@material-ui/icons';

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

      <List subheader={<ListSubheader>Labels</ListSubheader>}>
        {globalStore.tags.map((tag) => {
          const label = `LABEL:${tag}`;
          return (
            <ListItem
              key={label}
              component="li"
              onClick={() => globalActions.setVisibilityFilter(label)}
              button
              dense
            >
              <ListItemIcon>
                <LabelOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={tag} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
