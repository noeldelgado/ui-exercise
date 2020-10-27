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
  const [selectedItemsIds, setSelectedItemsIds] = useState([]);

  useEffect(() => {
    setFilteredItems(getFilteredEmails(filter, emails));
  }, [emails]);

  useEffect(() => {
    setSelectedItemsIds([]);
    setFilteredItems(getFilteredEmails(filter, emails));
    globalActions.app.setActiveEmailId(null);
  }, [filter]);

  const handleCheckEmailOptionClick = (option) => {
    const selectedItemsIds = getCheckedEmails(option, filteredItems);
    setSelectedItemsIds(selectedItemsIds);
  };

  return (
    <Box>
      <MailListHeader
        filteredItems={filteredItems}
        selectedItemsIds={selectedItemsIds}
        onCheckEmailOptionClick={handleCheckEmailOptionClick}
      />
      <Divider />
      <List subheader={<ListSubheader>{filter}</ListSubheader>}>
        {filteredItems.length ? (
          filteredItems.map((email) => (
            <ListItem
              key={email.id}
              onClick={() => globalActions.app.setActiveEmailId(email.id)}
              component="li"
              selected={selectedItemsIds.includes(email.id)}
              button
              divider
            >
              <ListItemText primary={email.sender} secondary={email.subject} />
              <Box>
                {email.date}
                <br />
                read: {String(email.read)}
                <br />
                starred: {String(email.starred)}
                <br />
                deleted: {String(email.deleted)}
                <br />
                {email.tags.map((tag, index) => (
                  <Chip
                    key={`${tag}-${index}`}
                    label={tag}
                    size="small"
                    variant="outlined"
                  />
                ))}
              </Box>
            </ListItem>
          ))
        ) : (
          <ListItem>There are no conversations with this label.</ListItem>
        )}
      </List>
    </Box>
  );
}
