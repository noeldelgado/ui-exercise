import React from 'react';
import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import { LabelOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import tagColors from '/src/utils/mockdata/tag-colors';
import useStore from '/src/store';

const useStyles = makeStyles((theme) => ({
  listItemIcon: {
    minWidth: theme.spacing(4),
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavListTags() {
  const [globalStore, globalActions] = useStore();
  const classes = useStyles();

  return (
    <List
      subheader={<ListSubheader>Labels</ListSubheader>}
      className={classes.list}
    >
      {globalStore.tags.map((tag) => {
        const label = `LABEL:${tag}`;
        const { color } = tagColors[tag] ?? tagColors.default;
        return (
          <ListItem
            key={label}
            selected={globalStore.filter === label}
            component="li"
            onClick={() => globalActions.app.setVisibilityFilter(label)}
            button
            dense
          >
            <ListItemIcon classes={{ root: classes.listItemIcon }} style={{ color }}>
              <LabelOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={tag} />
            <Box mr={1}>
              <Badge
                badgeContent={
                  globalStore.emails
                    .filter((e) => e.read === false)
                    .filter((e) => e.tags.filter((t) => t === tag).length)
                    .length
                }
              />
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
}
