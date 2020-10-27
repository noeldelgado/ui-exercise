import React from 'react';
import { Avatar, Badge, Box, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { DeleteOutlined, InboxOutlined, MailOutlined, SendOutlined, StarBorderRounded } from '@material-ui/icons';
import NavUserInfo from './Nav/NavUserInfo';
import useStore from '../store';
import logo from '../logo.png';

const NAV_ITEMS = [
  {
    text: 'INBOX',
    icon: InboxOutlined,
  },
  {
    text: 'STARRED',
    icon: StarBorderRounded,
  },
  {
    text: 'BIN',
    icon: DeleteOutlined,
  }
];

export default function Nav() {
  const [globalState, globalActions] = useStore();

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

      <NavUserInfo model={globalState.user}/>

      <List>
        {NAV_ITEMS.map(({ text, icon: Icon }) => (
          <ListItem key={text} component="li" button dense>
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={text} />
            <Box mr={1}>
              <Badge badgeContent={1} />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
