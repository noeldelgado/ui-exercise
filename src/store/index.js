import React from 'react';
import globalHook from 'use-global-hook';
import * as actions from './actions';
import { NAV_FILTER_ITEMS } from '../utils/constants';

const initialState = {
  loading: true,

  user: {},
  emails: [],
  tags: [],

  filter: NAV_FILTER_ITEMS.INBOX,
  activeEmailId: null,

  mobileNavOpen: false,

  banner: null,
  bannerMessage: null,
};

export default globalHook(React, initialState, actions);
