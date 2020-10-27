import React from 'react';
import { array, bool, func, shape, string } from 'prop-types';
import {
  Badge,
  Box,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { AttachFileRounded, DeleteRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import AvatarCustom from '/src/components/AvatarCustom';
import ChipCustom from '/src/components/ChipCustom';
import ToggleButtonStar from '/src/components/ToggleButtonStar';
import { formatDate, getTextContent, getUserInfo } from '/src/utils';
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
  const userInfo = getUserInfo(model.sender);

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
      <ListItemIcon
        style={{
          minWidth: 32,
          flexDirection: 'column',
          marginLeft: -12,
          marginTop: -2,
        }}
      >
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
      </ListItemIcon>

      {/* TEXT */}
      <ListItemText
        id={labelId}
        primary={
          <Box display="flex" justifyContent="space-between">
            <Box display="inline-flex" alignItems="center">
              <AvatarCustom
                className={classes.avatar}
                alt={userInfo?.name ?? model.sender}
                src={userInfo?.avatar}
              />
              <Typography
                variant="body2"
                color={model.read ? 'textSecondary' : 'inherit'}
                noWrap
              >
                <Box component="span" fontWeight={model.read ? 400 : 600}>
                  {userInfo?.name ?? model.sender}
                </Box>
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" color="textSecondary" noWrap>
                {formatDate(model.date)}
                <Box ml={1} component="span" position="relative" zIndex={0}>
                  <Badge
                    color="secondary"
                    variant="dot"
                    badgeContent={Number(!model.read)}
                  />
                </Box>
              </Typography>
            </Box>
          </Box>
        }
        secondary={
          <>
            <Typography
              component="span"
              display="block"
              variant="body2"
              color={model.read ? 'textSecondary' : 'textPrimary'}
              noWrap
            >
              {model.deleted && (
                <DeleteRounded
                  color="action"
                  fontSize="small"
                  style={{ verticalAlign: 'middle' }}
                />
              )}
              <Box component="span" fontWeight={model.read ? 400 : 500}>
                {model.subject}
              </Box>
            </Typography>
            <Typography component="span" display="block" variant="body2" noWrap>
              {getTextContent(model.body).substring(0, 100)}
            </Typography>
            <Box component="span" display="flex" pt={1}>
              {Boolean(model.attachments?.length) && (
                <Box
                  component="span"
                  display="inline-flex"
                  alignItems="center"
                  pr={0.5}
                >
                  <AttachFileRounded fontSize="inherit" />
                  {model.attachments.length}
                </Box>
              )}

              {Boolean(model.tags?.length) && (
                <>
                  {model.tags.map((tag, i) => (
                    <Box key={i} component="span" mr={0.5}>
                      <ChipCustom
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
          </>
        }
      />
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
    attachments: array.isRequired,
  }).isRequired,
  selected: bool,
  onChange: func.isRequired,
};
