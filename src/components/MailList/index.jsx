import React, { useEffect, useState } from 'react';
import { Box, Divider, List, ListItem, ListSubheader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MailListHeader from './MailListHeader';
import MailListItem from './MailListItem';
import { getFilteredEmails, getCheckedEmails } from './utils';
import useStore from '../../store';

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: '100%',
  },
}));

export default function MailList() {
  const [{ filter, emails }, globalActions] = useStore();
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItemsIds, setSelectedItemsIds] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setFilteredItems(getFilteredEmails(filter, emails));
  }, [emails]);

  useEffect(() => {
    setSelectedItemsIds([]);
    setFilteredItems(getFilteredEmails(filter, emails));
    globalActions.app.setActiveEmailId(null);
  }, [filter]);

  const handleItemChange = (id, checked) => {
    if (checked) return setSelectedItemsIds([...selectedItemsIds, id]);
    setSelectedItemsIds(selectedItemsIds.filter((i) => i !== id));
  };

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
      <List
        subheader={<ListSubheader>{filter}</ListSubheader>}
        className={classes.list}
      >
        {filteredItems.length ? (
          filteredItems.map((email) => (
            <MailListItem
              key={`${filter}-${email.id}`}
              model={email}
              selected={selectedItemsIds.includes(email.id)}
              onChange={handleItemChange}
            />
          ))
        ) : (
          <ListItem>There are no conversations with this label.</ListItem>
        )}
      </List>
    </Box>
  );
}
