export function setLoading(store, loading = true) {
  store.setState({ loading });
}

export function setInitialFetchedData(store, data) {
  store.setState({ user: data.user, emails: data.emails });
}
