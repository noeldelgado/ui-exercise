import React from 'react';
import { shape, string } from 'prop-types';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listAvatar: {
    minWidth: theme.spacing(5.5),
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function NavUserInfo({ model }) {
  const classes = useStyles();

  return (
    <List dense disablePadding>
      <ListItem>
        <ListItemAvatar className={classes.listAvatar}>
          <Avatar
            variant="rounded"
            alt={model?.name}
            src={model?.avatar}
            className={classes.avatar}
          />
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

NavUserInfo.propTypes = {
  model: shape({
    name: string,
    avatar: string,
  }),
};
