/**
 * Updates store.state.loading property. Used to display the initial `LoadingScreen`
 * @param {bool} [loading=true] if `true`, `LoadingScreen` is shown
 */
export function setLoading(store, loading = true) {
  store.setState({ loading });
}

/**
 * Sets `user`, `emails` and globalStore `tags`.
 * - Emails are DESC ordered by date
 * - Tags are read from emails
 * @param {object} data
 * @property {object} data.user - faked logged in user
 * @property {array} data.emails - faked emails (sent and received)
 */
export function setInitialFetchedData(store, data) {
  const emails = data.emails
    .reverse()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const tags = [...new Set(data.emails.flatMap((email) => email.tags))];

  store.setState({ user: data.user, emails, tags });
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

/**
 * Updates banner/snackbar state visibility
 * @param {bool} [open=false] whether or not `Snackbar` should be shown
 * @param {string} [message=''] the message to display
 */
export function setBanner(store, open = false, message = '') {
  store.setState({ banner: open, bannerMessage: message });
}

/**
 * For mobile only (max-width: 600px)
 * @param {bool} [open=false] if `true`, `Drawer -> Nav` is open
 */
export function setMobileNavOpen(store, open = false) {
  store.setState({ mobileNavOpen: open });
}

/**
 * @param {bool} [open=false] if `true`, `ComposeEmail` widget is shown
 */
export function setComposeEmailOpen(store, value = false) {
  store.setState({ composeEmailOpen: value });
}
