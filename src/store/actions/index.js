export function setLoading(store, loading = true) {
  store.setState({ loading });
}

export function setInitialFetchedData(store, data) {
  const tags = [...new Set(data.emails.flatMap((email) => email.tags))];

  store.setState({ user: data.user, emails: data.emails, tags });
}

export function setActiveEmailId(store, activeEmailId = null) {
  store.setState({ activeEmailId });
}

export function setVisibilityFilter(store, filter) {
  store.setState({ filter });
}
