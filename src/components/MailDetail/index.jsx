import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStore from '../../store';

export default function MailDetail() {
  const [globalStore] = useStore();
  const emailIndex = globalStore.emails?.findIndex(
    (e) => e?.id === globalStore.activeEmailId,
  );
  const email = globalStore.emails?.[emailIndex];

  if (!email) return <Box>No conversation selected</Box>;

  return (
    <Box>
      <Typography>
        {email.subject}
      </Typography>
    </Box>
  );
}
