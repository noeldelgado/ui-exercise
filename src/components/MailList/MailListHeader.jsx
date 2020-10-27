import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@material-ui/core';
import {
  ArrowDropDownRounded,
  DeleteOutlined,
  DraftsOutlined,
  StarBorderRounded,
} from '@material-ui/icons';

import { EMAIL_CHECK_OPTIONS } from '/src/utils/constants';

export default function MailListHeader() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  return (
    <Box display="flex" alignItems="center" bgcolor="background.paper">
      <Tooltip title="Select">
        <Button
          size="small"
          aria-controls="mail-list-header__filter-menu"
          aria-haspopup="true"
          onClick={(ev) => setMenuAnchorEl(ev.currentTarget)}
        >
          <Checkbox size="small" onClick={(ev) => ev.stopPropagation()} />
          <ArrowDropDownRounded />
        </Button>
      </Tooltip>
      <Menu
        id="mail-list-header__filter-menu"
        getContentAnchorEl={null}
        anchorEl={menuAnchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={Boolean(menuAnchorEl)}
        onClose={() => setMenuAnchorEl(null)}
        keepMounted
      >
        {Object.keys(EMAIL_CHECK_OPTIONS).map((key) => (
          <MenuItem key={key}>{key}</MenuItem>
        ))}
      </Menu>
      <Divider orientation="vertical" flexItem />
      <Box display="flex" alignItems="center">
        <Tooltip title="Delete">
          <IconButton>
            <DeleteOutlined fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Mark as read">
          <IconButton>
            <DraftsOutlined fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add star">
          <IconButton>
            <StarBorderRounded fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
