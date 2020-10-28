import React from 'react';
import { array, bool, shape, string } from 'prop-types';
import { Box, Typography } from '@material-ui/core';

import AvatarCustom from '../AvatarCustom';
import { formatDate } from '../../utils';
import useStore from '../../store';

export default function MailDetailSenderInfo({ model, userInfo }) {
  const [globalStore] = useStore();

  return (
    <Box pt={2} px={3}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box display="flex" pb={1}>
          <AvatarCustom
            key={model.sender}
            alt={userInfo?.name ?? model.sender}
            src={userInfo?.avatar}
          />
          <Box ml={1}>
            <Typography component="p" variant="body2" noWrap>
              <Box component="span" fontWeight={500}>
                {userInfo?.name ? (
                  <>
                    {userInfo.name}&nbsp;
                    <Typography
                      component="span"
                      variant="caption"
                      color="textSecondary"
                    >
                      &lt;{model.sender}&gt;
                    </Typography>
                  </>
                ) : (
                  <Box component="span">{model.sender}</Box>
                )}
              </Box>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {model.sender !== globalStore.user.email
                ? 'to me'
                : model?.recipient ?? 'unknown recipient'}
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
  }).isRequired,
  userInfo: shape({
    name: string,
    avatar: string,
  }).isRequired,
};
