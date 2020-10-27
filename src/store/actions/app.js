/**
 * Updates store.state.loading property. Used to display the initial `LoadingScreen`
 * @param {bool} [loading=true] if `true`, `LoadingScreen` is shown
 */
export function setLoading(store, loading = true) {
  store.setState({ loading });
}

/**
 * Sets `user`, `emails` and globalStore `tags`.
 * - Tags are read from emails
 * @param {object} data
 * @property {object} data.user - faked logged in user
 * @property {array} data.emails - faked emails (sent and received)
 */
export function setInitialFetchedData(store, data) {
  const tags = [...new Set(data.emails.flatMap((email) => email.tags))];

  store.setState({ user: data.user, emails: data.emails, tags });
}

/**
 * Sets the id of email.message to show on the `MailDetail` panel
 * @param {string} [activeEmailId='']
 */
export function setActiveEmailId(store, activeEmailId = null) {
  store.setState({ activeEmailId });
}

/**
 * Sets the global `filter` key, used to know which messages should be rendered
 * @param {string} filter - one of `NAV_FILTER_ITEMS` keys or `LABEL:#{key}`
 */
export function setVisibilityFilter(store, filter) {
  store.setState({ filter });
}
