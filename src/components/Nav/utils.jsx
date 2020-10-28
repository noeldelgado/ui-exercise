import React from 'react';
import {
  DeleteOutlined,
  InboxOutlined,
  MailOutlined,
  SendOutlined,
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
    case NAV_FILTER_ITEMS.SENT:
      return <SendOutlined fontSize="small" />;
    case NAV_FILTER_ITEMS.ALL:
      return <MailOutlined fontSize="small" />;
    default:
      return <InboxOutlined fontSize="small" />;
  }
}

export function getNavFilterUnreadCounter(filter, emails, user) {
  switch (filter) {
    case NAV_FILTER_ITEMS.INBOX:
      return emails
        .filter((e) => e.read === false)
        .filter((e) => e.deleted === false).length;
    case NAV_FILTER_ITEMS.STARRED:
      return emails
        .filter((e) => e.read === false)
        .filter((e) => e.starred === true).length;
    case NAV_FILTER_ITEMS.BIN:
      return emails
        .filter((e) => e.read === false)
        .filter((e) => e.deleted === true).length;
    case NAV_FILTER_ITEMS.SENT:
      return emails
        .filter((e) => e.read === false)
        .filter((e) => e.sender === user.email).length;
    case NAV_FILTER_ITEMS.ALL:
      return emails.filter((e) => e.read === false).length;
  }
}
