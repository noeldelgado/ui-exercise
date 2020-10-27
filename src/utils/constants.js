const arrayToObjectKeys = (arr) => arr.reduce((a, b) => ((a[b] = b), a), {});

export const NAV_FILTER_ITEMS = arrayToObjectKeys([
  'INBOX',
  'STARRED',
  'BIN',
  'SENT',
  'ALL',
]);

export const EMAIL_CHECK_OPTIONS = arrayToObjectKeys([
  'ALL',
  'NONE',
  'READ',
  'UNREAD',
  'STARRED',
  'UNSTARRED',
]);

export const ATTACHMENTS_TYPES = arrayToObjectKeys(['image', 'pdf']);
