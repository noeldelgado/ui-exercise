import React, { useEffect } from 'react';
import { Box, Fade } from '@material-ui/core';

import LoadingScreen from './components/LoadingScreen';
import Nav from './components/Nav';
import MailList from './components/MailList';
import MailDetail from './components/MailDetail';
import Api from './api';
import useStore from './store';

export default function App() {
  const [globalStore, globalActions] = useStore();

  useEffect(() => {
    (async function fetchAppData() {
      try {
        const [user, emails] = await Promise.all([
          Api.getUser(),
          Api.getUserEmails(),
        ]);
        globalActions.setInitialFetchedData({ user, emails });
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
        <MailList />
        <MailDetail />
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
