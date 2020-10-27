import React from 'react';
import { array, bool, shape, string } from 'prop-types';
import { Avatar, Box, Typography } from '@material-ui/core';

import { formatDate } from '/src/utils';

export default function MailDetailSenderInfo({ model }) {
  return (
    <Box pt={2} px={3}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box display="flex" pb={1}>
          <Avatar key={model.sender} alt={model.sender} />
          <Box ml={1}>
            <Typography component="p" variant="body2" noWrap>
              <Box component="span" fontWeight={500}>
                <Box component="span">{model.sender}</Box>
              </Box>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              to me
            </Typography>
          </Box>
        </Box>
        <Box pb={1}>
          <Typography variant="caption" color="textSecondary" noWrap>
            {formatDate(model.date, {
              month: 'long',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

MailDetailSenderInfo.propTypes = {
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
