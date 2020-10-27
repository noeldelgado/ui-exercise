import React from 'react';
import { array, bool, func, shape, string } from 'prop-types';
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Chip,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ToggleButtonStar from '/src/components/ToggleButtonStar';
import { formatDate, getTextContent } from '/src/utils';
import useStore from '/src/store';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: '0.8rem',
    marginRight: theme.spacing(1),
  },
}));

export default function MailListItem({ model, onChange, selected = false }) {
  const [, globalActions] = useStore();
  const classes = useStyles();

  const labelId = `checkbox-list-secondary-label-${model.id}`;

  const handleItemClick = () => {
    globalActions.emails.setRead([model.id], true);
    globalActions.app.setActiveEmailId(model.id);
  };

  const handleCheckboxClick = (ev) => {
    ev.stopPropagation();
    onChange(model.id, ev.target.checked);
  };

  const handleStarButtonClick = (ev) => {
    ev.stopPropagation();
    globalActions.emails.setStarred([model.id], !model.starred);
  };

  return (
    <ListItem
      selected={selected}
      onClick={handleItemClick}
      component="li"
      alignItems="flex-start"
      button
      divider
    >
      {/* CONTROLS */}
      <Box ml={-1}>
        <Tooltip title="Select">
          <Checkbox
            size="small"
            color="secondary"
            checked={selected}
            onClick={handleCheckboxClick}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </Tooltip>
        <Box ml={1.1} mt={-0.5}>
          <ToggleButtonStar
            active={model.starred}
            size="small"
            onClick={handleStarButtonClick}
          />
        </Box>
      </Box>

      {/* TEXT */}
      <Box>
        {/* TEXT:{sender, date, readFeedback} */}
        <Box display="flex" justifyContent="space-between">
          <Box display="inline-flex" alignItems="center">
            <Avatar className={classes.avatar} alt={model.sender} />
            <Typography
              variant="body2"
              color={model.read ? 'textSecondary' : 'inherit'}
              noWrap
            >
              {model.sender}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="textSecondary">
              {formatDate(model.date)}
              <Box ml={1} component="span">
                <Badge
                  color="secondary"
                  variant="dot"
                  badgeContent={Number(!model.read)}
                />
              </Box>
            </Typography>
          </Box>
        </Box>
        {/* TEXT:{subject, } */}
        <Typography
          variant="body2"
          color={model.read ? 'textSecondary' : 'textPrimary'}
          noWrap
        >
          <Box component="span" fontWeight={model.read ? 400 : 500}>
            {model.subject}
          </Box>
        </Typography>
        {/* TEXT:{bodyPreview} */}
        <Typography variant="caption" color="textSecondary">
          {getTextContent(model.body).substring(0, 100)}
        </Typography>
        {/* TEXT:tags */}
        <Box>
          {Boolean(model.tags?.length) && (
            <>
              {model.tags.map((tag, i) => (
                <Box key={i} component="span" mr={0.5}>
                  <Chip
                    label={tag}
                    component="span"
                    size="small"
                    variant="outlined"
                  />
                </Box>
              ))}
            </>
          )}
        </Box>
      </Box>
    </ListItem>
  );
}

MailListItem.propTypes = {
  model: shape({
    id: string.isRequired,
    date: string.isRequired,
    sender: string.isRequired,
    subject: string.isRequired,
    tags: array.isRequired,

    read: bool.isRequired,
    starred: bool.isRequired,
    deleted: bool.isRequired,
  }).isRequired,
  selected: bool,
  onChange: func.isRequired,
};
