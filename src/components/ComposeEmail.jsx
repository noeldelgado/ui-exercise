import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Input,
  InputBase,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core';
import {
  CloseRounded,
  MinimizeRounded,
  MaximizeRounded,
} from '@material-ui/icons';

import useStore from '../store';

export default function ComposeEmail() {
  const [globalState, globalActions] = useStore();
  const [collapsed, setCollapsed] = useState(false);
  const toggleIcon = collapsed ? <MaximizeRounded /> : <MinimizeRounded />;

  const handleClose = () => {
    globalActions.app.setComposeEmailOpen(false);
    setCollapsed(false);
  };
  const handleToggle = () => setCollapsed(!collapsed);

  if (globalState.composeEmailOpen === false) {
    return false;
  }

  return (
    <Box
      position="fixed"
      bottom={0}
      right={16}
      zIndex={1}
      ml={1}
      onKeyUp={(event) => {
        if (event.key === 'Escape') handleClose();
      }}
    >
      <Paper elevation={6}>
        <Box
          bgcolor="text.primary"
          color="background.paper"
          borderRadius="6px 6px 0 0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={1}
          pl={2}
        >
          <Typography variant="body2">New Message</Typography>
          <Box color="background.paper" pl={2}>
            <Tooltip title={collapsed ? 'Maximize' : 'Minimize'}>
              <IconButton color="inherit" size="small" onClick={handleToggle}>
                {toggleIcon}
              </IconButton>
            </Tooltip>
            <Tooltip title={'Close'}>
              <IconButton size="small" color="inherit" onClick={handleClose}>
                <CloseRounded fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        {!collapsed && (
          <Box p={2} pt={1}>
            <Input placeholder={'To'} color="secondary" fullWidth autoFocus />
            <Input placeholder={'Subject'} color="secondary" fullWidth />
            <Box pt={1}>
              <InputBase rows={10} multiline fullWidth placeholder="Body" />
            </Box>
            <Button disabled variant="contained" color="secondary">
              Send
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
