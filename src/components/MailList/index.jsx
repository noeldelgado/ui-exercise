import React, { useEffect, useState } from 'react';
import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';

import MailListHeader from './MailListHeader';
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
      <MailListHeader />
      <Divider />
      <List subheader={<ListSubheader>{filter}</ListSubheader>}>
        {filteredItems.map((email) => (
          <ListItem
            key={email.id}
            onClick={() => globalActions.setActiveEmailId(email.id)}
            component="li"
            button
            divider
          >
            <ListItemText primary={email.sender} secondary={email.subject} />
            {email.date}
            {email.tags.map((tag, index) => (
              <Chip
                key={`${tag}-${index}`}
                label={tag}
                size="small"
                variant="outlined"
              />
            ))}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
