import { NAV_FILTER_ITEMS, EMAIL_CHECK_OPTIONS } from '../../utils/constants';

export function getFilteredEmails(filter, emails, user) {
  if (filter.startsWith('LABEL:')) {
    const label = filter.split(':').pop();
    return emails.filter(
      (email) => email.tags.filter((tag) => tag === label).length,
    );
  }

  switch (filter) {
    case NAV_FILTER_ITEMS.INBOX:
      return emails.filter(
        (email) => email.sender !== user.email && email.deleted === false,
      );
    case NAV_FILTER_ITEMS.STARRED:
      return emails.filter((email) => email.starred === true);
    case NAV_FILTER_ITEMS.BIN:
      return emails.filter((email) => email.deleted === true);
    case NAV_FILTER_ITEMS.SENT:
      return emails.filter((email) => email.sender === user.email);
    case NAV_FILTER_ITEMS.ALL:
      return emails;
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

export function getCheckedEmails(option, emails) {
  switch (option) {
    case EMAIL_CHECK_OPTIONS.ALL:
      return emails.map((e) => e.id);
    case EMAIL_CHECK_OPTIONS.NONE:
      return [];
    case EMAIL_CHECK_OPTIONS.READ:
      return emails.filter((e) => e.read).map((e) => e.id);
    case EMAIL_CHECK_OPTIONS.UNREAD:
      return emails.filter((e) => (e.read ?? false) === false).map((e) => e.id);
    case EMAIL_CHECK_OPTIONS.STARRED:
      return emails.filter((e) => e.starred).map((e) => e.id);
    case EMAIL_CHECK_OPTIONS.UNSTARRED:
      return emails
        .filter((e) => (e.starred ?? false) === false)
        .map((e) => e.id);
    default:
      throw new Error(`Unknown select option ${option}`);
  }
}
