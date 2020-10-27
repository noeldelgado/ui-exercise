import React from 'react';
import { array, bool, shape, string } from 'prop-types';
import { Box, IconButton, Tooltip } from '@material-ui/core';
import {
  ArrowBackIosRounded,
  DraftsOutlined,
  DeleteOutlined,
  MarkunreadOutlined,
  MoveToInboxOutlined,
  ReplyOutlined,
} from '@material-ui/icons';

import ToggleButtonStar from '/src/components/ToggleButtonStar';
import useStore from '/src/store';

export default function MailDetailTopControls({ model }) {
  const [, globalActions] = useStore();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="background.paper"
      px={1}
      minHeight={46}
    >
      <IconButton onClick={() => globalActions.app.setActiveEmailId(null)}>
        <ArrowBackIosRounded fontSize="small" />
      </IconButton>

      <Box>
        <Box component="span" color={'warning.light'}>
          <ToggleButtonStar
            active={model.starred}
            onClick={() =>
              globalActions.emails.setStarred([model.id], !model.starred)
            }
          />
        </Box>

        {model.deleted ? (
          <Tooltip title="Move to inbox">
            <IconButton
              onClick={() => {
                globalActions.emails.setDeleted([model.id], false);
                globalActions.app.setActiveEmailId(null);
              }}
            >
              <MoveToInboxOutlined fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Delete">
            <IconButton
              onClick={() => {
                globalActions.emails.setDeleted([model.id], true);
                globalActions.app.setActiveEmailId(null);
              }}
            >
              <DeleteOutlined fontSize="small" />
            </IconButton>
          </Tooltip>
        )}

        <Tooltip title={model.read ? 'Mark as unread' : 'Mark as read'}>
          <IconButton
            onClick={() => {
              globalActions.emails.setRead([model.id], !model.read);
              globalActions.app.setActiveEmailId(null);
            }}
          >
            {model.read ? (
              <MarkunreadOutlined fontSize="small" />
            ) : (
              <DraftsOutlined fontSize="small" />
            )}
          </IconButton>
        </Tooltip>

        <IconButton aria-label="Reply" disabled>
          <ReplyOutlined fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

MailDetailTopControls.propTypes = {
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
};
