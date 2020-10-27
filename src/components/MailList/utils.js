import { NAV_FILTER_ITEMS } from '../../utils/constants';

export function getFilteredEmails(filter, emails) {
  if (filter.startsWith('LABEL:')) {
    const label = filter.split(':').pop();
    return emails.filter(
      (email) => email.tags.filter((tag) => tag === label).length,
    );
  }

  switch (filter) {
    case NAV_FILTER_ITEMS.INBOX:
      return emails.filter((email) => email.deleted === false);
    case NAV_FILTER_ITEMS.STARRED:
      return emails.filter((email) => email.starred === true);
    case NAV_FILTER_ITEMS.BIN:
      return emails.filter((email) => email.deleted === true);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}
