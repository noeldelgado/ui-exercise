import React from 'react';
import globalHook from 'use-global-hook';
import * as actions from './actions';

const initialState = {
  loading: true,

  user: null,
  emails: [],
};

export default globalHook(React, initialState, actions);
