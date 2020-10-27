import React from 'react';
import { Box, Chip, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MailDetailEmptyState from './MailDetailEmptyState';
import MailDetailTopControls from './MailDetailTopControls';
import MailDetailSenderInfo from './MailDetailSenderInfo';
import MailDetailBody from './MailDetailBody';
import useStore from '/src/store';

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
              <Chip label={tag} size="small" variant="outlined" />
            </Box>
          ))}
        </Box>
        <MailDetailSenderInfo model={email} />
        <MailDetailBody model={email} />
      </Box>
    </Box>
  );
}
