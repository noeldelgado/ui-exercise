/**
 * Updates emails `starred` property
 * @param {array} ids - collection of email ids
 */
export function setStarred(store, ids, value = true) {
  const emails = store.state.emails.map((email) => ({ ...email }));

  ids.forEach((id) => {
    let index = emails.findIndex((email) => email.id === id);
    if (index < 0) return console.warn(`email id: ${id} not found`);
    emails[index].starred = value;
  });

  store.setState({ emails });
}

/**
 * Updates emails `read` property
 * @param {array} ids - collection of email ids
 */
export function setRead(store, ids, value = true) {
  const emails = store.state.emails.map((email) => ({ ...email }));

  ids.forEach((id) => {
    let index = emails.findIndex((email) => email.id === id);
    if (index < 0) return console.warn(`email id: ${id} not found`);
    emails[index].read = value;
  });

  store.setState({ emails });
}

/**
 * Updates emails `deleted` property
 * @param {array} ids - collection of email ids
 */
export function setDeleted(store, ids, value = true) {
  const emails = store.state.emails.map((email) => ({ ...email }));

  ids.forEach((id) => {
    let index = emails.findIndex((email) => email.id === id);
    if (index < 0) return console.warn(`email id: ${id} not found`);
    emails[index].deleted = value;
  });

  store.setState({ emails });

  const movedTo = value ? 'Bin' : 'Inbox';
  store.actions.app.setBanner(true, `Conversations moved to ${movedTo}`);
}
