import React from 'react';
import { Snackbar } from '@material-ui/core';

import useStore from '../store';

export default function Banner() {
  const [globalState, globalActions] = useStore();

  return (
    <Snackbar
      key={globalState.bannerMessage}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={globalState.banner}
      message={globalState.bannerMessage}
      autoHideDuration={6000}
      onClose={() => globalActions.app.setBanner(false)}
    />
  );
}
