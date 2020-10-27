import React from 'react';
import { Box, LinearProgress, Typography } from '@material-ui/core';

export default function MailDetailEmptyState() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      bgcolor="action.selected"
    >
      <Box align="center">
        <Typography>No conversation selected</Typography>
        <Box pt={2} pb={1}>
          <Typography variant="caption" color="textSecondary">
            You are currently using 4.73 GB (31 %) of your 15 GB.
          </Typography>
        </Box>
        <LinearProgress variant="determinate" value={31} color="secondary" />
      </Box>
    </Box>
  );
}
