/**
 * Updates emails `starred` key of all the emails matching the [ids] param
 * @param {array} ids - collection of email ids
 */
export function setStarred(store, ids, value = true) {
  // const emails = [...store.state.emails];
  // const emails = clone(store.state.emails);
  const emails = store.state.emails.map((email) => ({ ...email }));

  ids.forEach((id) => {
    let index = emails.findIndex((email) => email.id === id);
    if (index < 0) return console.warn(`email id: ${id} not found`);
    emails[index].starred = value;
  });

  store.setState({ emails });
}
