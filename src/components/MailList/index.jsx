import React, { useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default function MailList({ collection }) {
  return (
    <List>
      {collection.map((email) => (
        <ListItem key={email.id} component="li" button divider>
          <ListItemText primary={email.sender} secondary={email.subject} />
        </ListItem>
      ))}
    </List>
  );
}
