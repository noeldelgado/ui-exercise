import React from 'react';
import { Box, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(1),
    backgroundColor: theme.palette.grey[300],
  },
  bar: {
    backgroundColor: theme.palette.grey[500],
  },
}));

export default function MailDetailEmptyState() {
  const classes = useStyles();

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
        <LinearProgress variant="determinate" value={31} classes={classes} />
      </Box>
    </Box>
  );
}
