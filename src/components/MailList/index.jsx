import React, { useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import useStore from '../../store';

export default function MailList({ collection }) {
  const [, globalActions] = useStore();

  return (
    <List>
      {collection.map((email) => (
        <ListItem
          key={email.id}
          onClick={() => globalActions.setActiveEmailId(email.id)}
          component="li"
          button
          divider
        >
          <ListItemText primary={email.sender} secondary={email.subject} />
        </ListItem>
      ))}
    </List>
  );
}
