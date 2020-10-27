import React, { useEffect } from 'react';
import { Box, Fab, Drawer, Fade, Hidden } from '@material-ui/core';
import { CreateRounded } from '@material-ui/icons';

import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Nav from './components/Nav';
import MailList from './components/MailList';
import MailDetail from './components/MailDetail';
import ComposeEmail from './components/ComposeEmail';
import Banner from './components/Banner';
import Api from './api';
import useStore from './store';

export default function App() {
  const [globalStore, globalActions] = useStore();

  useEffect(() => {
    (async function fetchAppData() {
      try {
        const [user, sentEmails, emails] = await Promise.all([
          Api.getUser(),
          Api.getSentEmails(),
          Api.getUserEmails(),
        ]);
        globalActions.app.setInitialFetchedData({
          user,
          emails: [...sentEmails, ...emails],
        });
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          globalActions.app.setLoading(false);
        }, 0);
      }
    })();
  }, []);

  useEffect(() => {
    globalActions.app.setMobileNavOpen(false);
  }, [globalStore.filter]);

  return (
    <>
      <Hidden xsDown>
        <Nav />
      </Hidden>

      <Hidden smUp>
        <Header />
        <Drawer
          anchor="left"
          variant="temporary"
          open={globalStore.mobileNavOpen}
          onClose={() => globalActions.app.setMobileNavOpen(false)}
          ModalProps={{ keepMounted: true }}
        >
          <Nav />
        </Drawer>
        <Box
          position="absolute"
          right={16}
          bottom={globalStore.banner || globalStore.composeEmailOpen ? 63 : 16}
          zIndex={1}
        >
          <Fab
            color="primary"
            aria-label="add"
            variant="extended"
            onClick={() => globalActions.app.setComposeEmailOpen(true)}
          >
            <CreateRounded mr={10} />
            <Box px={1}>Compose</Box>
          </Fab>
        </Box>
      </Hidden>

      <Box component="main">
        <Box
          className="mainInner"
          data-active-email-id={globalStore.activeEmailId}
        >
          <MailList />
          <MailDetail />
        </Box>
      </Box>
      <ComposeEmail />
      <Banner />
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
