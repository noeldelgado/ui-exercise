import React, { useEffect, useState } from 'react';
import { array, func } from 'prop-types';
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

export default function MailListHeader({
  onCheckEmailOptionClick,
  filteredItems,
  selectedItems,
}) {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [checked, setChecked] = useState(false);
  const [indeterminated, setIndeterminated] = useState(false);

  useEffect(() => {
    const selectedLen = selectedItems.length;
    const filteredLen = filteredItems.length;

    if (selectedLen === 0 && filteredLen === 0) {
      setChecked(false);
      setIndeterminated(false);
    } else if (selectedLen === filteredLen) {
      setChecked(true);
      setIndeterminated(false);
    } else {
      const value = selectedLen ? true : false;
      setChecked(value);
      setIndeterminated(value);
    }
  }, [selectedItems, filteredItems]);

  const handleCheckboxClick = (ev) => {
    ev.stopPropagation();
    const option = EMAIL_CHECK_OPTIONS[ev.target.checked ? 'ALL' : 'NONE'];
    onCheckEmailOptionClick(option);
  };

  const handleMenuItemCLick = (option) => {
    onCheckEmailOptionClick(option);
    setMenuAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center" bgcolor="background.paper">
      <Tooltip title="Select">
        <Button
          size="small"
          aria-controls="mail-list-header__filter-menu"
          aria-haspopup="true"
          onClick={(ev) => setMenuAnchorEl(ev.currentTarget)}
        >
          <Checkbox
            size="small"
            checked={checked}
            indeterminate={indeterminated}
            onClick={handleCheckboxClick}
          />
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
          <MenuItem key={key} onClick={() => handleMenuItemCLick(key)}>
            {key}
          </MenuItem>
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

MailListHeader.propTypes = {
  onCheckEmailOptionClick: func.isRequired,
  filteredItems: array.isRequired,
  selectedItems: array.isRequired,
};
