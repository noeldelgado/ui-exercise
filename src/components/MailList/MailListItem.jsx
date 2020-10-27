import React from 'react';
import { array, bool, func, shape, string } from 'prop-types';
import {
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

import ToggleButtonStar from '/src/components/ToggleButtonStar';
import { formatDate } from '/src/utils';
import useStore from '/src/store';

export default function MailListItem({ model, onChange, selected = false }) {
  const [, globalActions] = useStore();
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
      button
      divider
    >
      <Box>
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
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
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
        <Box>
          <Typography
            variant="body2"
            color={model.read ? 'textSecondary' : 'textPrimary'}
            noWrap
          >
            <Box component="span" fontWeight={model.read ? 400 : 500}>
              {model.subject}
            </Box>
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {model.body.substring(0, 100)}
          </Typography>
        </Box>
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
