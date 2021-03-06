import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MailDetailEmptyState from './MailDetailEmptyState';
import MailDetailTopControls from './MailDetailTopControls';
import MailDetailSenderInfo from './MailDetailSenderInfo';
import MailDetailBody from './MailDetailBody';
import ChipCustom from '../ChipCustom';
import { getUserInfo } from '../../utils';
import useStore from '../../store';

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: '100%',
  },
}));

export default function MailDetail() {
  const [globalStore] = useStore();
  const classes = useStyles();

  const emailIndex = globalStore.emails?.findIndex(
    (e) => e?.id === globalStore.activeEmailId,
  );
  const email = globalStore.emails?.[emailIndex];
  const userInfo = getUserInfo(email?.sender);

  if (!email) return <MailDetailEmptyState />;

  return (
    <Box>
      <MailDetailTopControls model={email} />
      <Box px={1}>
        <Divider />
      </Box>

      <Box className={classes.list}>
        <Box display="flex" alignItems="center" flexWrap="wrap" pt={3} px={3}>
          <Box pr={1}>
            <Typography component="h2" variant="h6">
              {email.subject}
            </Typography>
          </Box>
          {email.tags.map((tag, index) => (
            <Box key={`${tag}-${index}`} mr={0.5}>
              <ChipCustom label={tag} size="small" variant="outlined" />
            </Box>
          ))}
        </Box>
        <MailDetailSenderInfo model={email} userInfo={userInfo} />
        <MailDetailBody model={email} />
      </Box>
    </Box>
  );
}
