import React from 'react';
import { Badge, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { DeleteOutlined, InboxOutlined, MailOutlined, SendOutlined, StarBorderRounded } from '@material-ui/icons';

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
      <List>
        {NAV_ITEMS.map(({ text, icon: Icon }) => (
          <ListItem component="li" button dense>
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
