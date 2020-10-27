import React from 'react';
import { bool, func, string } from 'prop-types';
import { Box, IconButton, Tooltip } from '@material-ui/core';
import { StarRounded, StarBorderRounded } from '@material-ui/icons';

export default function ToggleButtonStar({ active, size, onClick }) {
  return (
    <Box component="span" color="warning.light">
      <Tooltip title={active ? 'Starred' : 'Not starred'}>
        <IconButton
          edge="start"
          size={size}
          color={active ? 'inherit' : 'default'}
          onClick={onClick}
        >
          {active ? (
            <StarRounded fontSize="small" />
          ) : (
            <StarBorderRounded fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
}

ToggleButtonStar.propTypes = {
  active: bool,
  size: string,
  onClick: func.isRequired,
};

ToggleButtonStar.defaultProps = {
  active: false,
  size: 'medium',
};
