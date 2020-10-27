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
import { getFilteredEmails, getCheckedEmails } from './utils';
import useStore from '../../store';

export default function MailList() {
  const [{ filter, emails }, globalActions] = useStore();
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setFilteredItems(getFilteredEmails(filter, emails));
  }, [emails]);

  useEffect(() => {
    setSelectedItems([]);
    setFilteredItems(getFilteredEmails(filter, emails));
    globalActions.setActiveEmailId(null);
  }, [filter]);

  const handleCheckEmailOptionClick = (option) => {
    const selectedItems = getCheckedEmails(option, filteredItems);
    setSelectedItems(selectedItems);
  };

  return (
    <Box>
      <MailListHeader
        filteredItems={filteredItems}
        selectedItems={selectedItems}
        onCheckEmailOptionClick={handleCheckEmailOptionClick}
      />
      <Divider />
      <List subheader={<ListSubheader>{filter}</ListSubheader>}>
        {filteredItems.map((email) => (
          <ListItem
            key={email.id}
            onClick={() => globalActions.setActiveEmailId(email.id)}
            component="li"
            selected={selectedItems.includes(email.id)}
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
