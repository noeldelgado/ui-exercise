const arrayToObjectKeys = (arr) => arr.reduce((a, b) => ((a[b] = b), a), {});

export const NAV_FILTER_ITEMS = arrayToObjectKeys(['INBOX', 'STARRED', 'BIN']);
