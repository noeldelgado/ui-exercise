import React from 'react';
import {
  DeleteOutlined,
  InboxOutlined,
  StarBorderRounded,
} from '@material-ui/icons';

import { NAV_FILTER_ITEMS } from '../../utils/constants';

export function getNavFilterIcon(filter) {
  switch (filter) {
    case NAV_FILTER_ITEMS.INBOX:
      return <InboxOutlined fontSize="small" />;
    case NAV_FILTER_ITEMS.STARRED:
      return <StarBorderRounded fontSize="small" />;
    case NAV_FILTER_ITEMS.BIN:
      return <DeleteOutlined fontSize="small" />;
    default:
      return <InboxOutlined fontSize="small" />;
  }
}
