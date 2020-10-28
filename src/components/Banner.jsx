import React from 'react';
import { Snackbar } from '@material-ui/core';

import useStore from '../store';

export default function Banner() {
  const [globalStore, globalActions] = useStore();

  return (
    <Snackbar
      key={globalStore.bannerMessage}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={globalStore.banner}
      message={globalStore.bannerMessage}
      autoHideDuration={6000}
      onClose={() => globalActions.app.setBanner(false)}
    />
  );
}
