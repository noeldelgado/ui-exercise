import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import { LabelOutlined } from '@material-ui/icons';

import useStore from '../../store';

export default function NavListTags() {
  const [globalStore, globalActions] = useStore();

  return (
    <List subheader={<ListSubheader>Labels</ListSubheader>}>
      {globalStore.tags.map((tag) => {
        const label = `LABEL:${tag}`;
        return (
          <ListItem
            key={label}
            component="li"
            onClick={() => globalActions.app.setVisibilityFilter(label)}
            button
            dense
          >
            <ListItemIcon>
              <LabelOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={tag} />
          </ListItem>
        );
      })}
    </List>
  );
}
