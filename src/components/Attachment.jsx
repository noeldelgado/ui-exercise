import React from 'react';
import { shape, string } from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import {
  InsertDriveFileRounded,
  DescriptionRounded,
  PictureAsPdfRounded,
} from '@material-ui/icons';

import { ATTACHMENTS_TYPES } from '/src/utils/constants';

const getFileName = (path) => {
  return path.split('/').pop();
};

const getContent = (model) => {
  switch (model.type) {
    case ATTACHMENTS_TYPES.image:
      return (
        <Box
          border={1}
          bgcolor="action.selected"
          borderColor="divider"
          style={{
            backgroundImage: `url(${model.path})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
          }}
        ></Box>
      );

    case ATTACHMENTS_TYPES.pdf:
      return (
        <Box
          display="flex"
          height="100%"
          flexDirection="column"
          border={1}
          borderColor="divider"
          bgcolor="background.paper"
        >
          <Box
            flexGrow={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="divider"
          >
            <InsertDriveFileRounded color="inherit" fontSize="large" />
          </Box>
          <Box
            py={0.5}
            px={1}
            borderTop={1}
            borderColor="divider"
            display="flex"
            alignItems="center"
            bgcolor="action.selected"
          >
            <Box pr={1}>
              <PictureAsPdfRounded color="primary" />
            </Box>
            <Typography variant="caption" noWrap>
              {getFileName(model.path)}
            </Typography>
          </Box>
        </Box>
      );

    default:
      return (
        <Box
          display="flex"
          height="100%"
          flexDirection="column"
          border={1}
          borderColor="divider"
          bgcolor="background.paper"
        >
          <Box
            flexGrow={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="divider"
          >
            <InsertDriveFileRounded color="inherit" fontSize="large" />
          </Box>
          <Box
            py={0.5}
            px={1}
            borderTop={1}
            borderColor="divider"
            display="flex"
            alignItems="center"
            bgcolor="action.selected"
          >
            <Box pr={1}>
              <DescriptionRounded color="secondary" />
            </Box>
            <Typography variant="caption" noWrap>
              {getFileName(model.path)}
            </Typography>
          </Box>
        </Box>
      );
  }
};

export default function Attachment({ model }) {
  return (
    <Box width={180} height={120}>
      {getContent(model)}
    </Box>
  );
}

Attachment.propTypes = {
  model: shape({
    type: string,
    path: string.isRequired,
  }),
};
