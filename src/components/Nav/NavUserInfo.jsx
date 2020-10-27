import React from 'react';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

export default function NavUserInfo({ model }) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="rounded" alt={model?.name} src={model?.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Typography display="block" variant="body2" noWrap>
                {model?.name}
              </Typography>
            </>
          }
          secondary={
            <>
              <Typography
                component="span"
                display="block"
                variant="caption"
                noWrap
              >
                {model?.email}
              </Typography>
            </>
          }
        />
      </ListItem>
    </List>
  );
}
