import React from 'react';
import { array, bool, shape, string } from 'prop-types';
import Parser from 'html-react-parser';
import { Box, Button, Divider, Typography } from '@material-ui/core';
import { ForwardRounded, ReplyOutlined } from '@material-ui/icons';

import Attachment from '/src/components/Attachment';

export default function MailDetailBody({ model }) {
  return (
    <Box pt={1} px={3} maxWidth="100ch" mx={'auto'}>
      <Typography component="div" color="textPrimary">
        {Parser(model.body)}
      </Typography>
      {Boolean(model.attachments?.length) && (
        <>
          <Box py={2}>
            <Divider />
          </Box>
          <Typography variant="subtitle2">
            <Box pb={1}>{`${model.attachments.length} Attachments`}</Box>
          </Typography>
          <Box display="flex" flexWrap="wrap">
            {model.attachments?.map((att) => {
              return (
                <Box key={att.path} mr={2} mb={2}>
                  <Attachment model={att} />
                </Box>
              );
            })}
          </Box>
        </>
      )}
      <Box py={2}>
        <Divider />
      </Box>
      <Box display="flex" pb={2}>
        <Box pr={1}>
          <Button variant="outlined" startIcon={<ReplyOutlined />} disabled>
            Reply
          </Button>
        </Box>
        <Button variant="outlined" startIcon={<ForwardRounded />} disabled>
          Forward
        </Button>
      </Box>
    </Box>
  );
}

MailDetailBody.propTypes = {
  model: shape({
    id: string.isRequired,
    date: string.isRequired,
    sender: string.isRequired,
    subject: string.isRequired,
    tags: array.isRequired,

    read: bool.isRequired,
    starred: bool.isRequired,
    deleted: bool.isRequired,
    attachments: array.isRequired,
  }).isRequired,
};
