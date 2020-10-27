import React, { useEffect } from 'react';
import { Box, Fade } from '@material-ui/core';

import LoadingScreen from './components/LoadingScreen';
import Nav from './components/Nav';
import useStore from './store';

export default function App() {
  const [globalStore, globalActions] = useStore();

  useEffect(() => {
    (async function fetchAppData() {
      try {
        const emails = await (await fetch(`/assets/data/emails.json`)).json();
        const user = await (await fetch(`/assets/data/user.json`)).json();
        globalActions.setInitialFetchedData({ user, emails: emails.messages });
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          globalActions.setLoading(false);
        }, 2000);
      }
    })();
  }, []);

  return (
    <>
      <Nav />
      <Box component="main">
        Main
        <br />
        {globalStore.emails.length} messages
        <br />
        {JSON.stringify(globalStore.user)}
      </Box>
      <Fade
        unmountOnExit
        in={globalStore.loading}
        timeout={{ enter: 0, exit: 200 }}
      >
        <Box>
          <LoadingScreen />
        </Box>
      </Fade>
    </>
  );
}
