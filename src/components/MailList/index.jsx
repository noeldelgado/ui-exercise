import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@material-ui/core';

import { getFilteredEmails } from './utils';
import useStore from '../../store';

export default function MailList() {
  const [{ filter, emails }, globalActions] = useStore();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(getFilteredEmails(filter, emails));
  }, [emails]);

  useEffect(() => {
    setFilteredItems(getFilteredEmails(filter, emails));
    globalActions.setActiveEmailId(null);
  }, [filter]);

  return (
    <Box>
      {filter}
      <List>
        {filteredItems.map((email) => (
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
    </Box>
  );
}
