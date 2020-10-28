import React from 'react';
import { render } from '@testing-library/react';

import NavListItems from './../../../components/Nav/NavListItems';

describe('components/Nav/NavListItems', () => {
  it('renders nav filter items', () => {
    const { getByText } = render(<NavListItems />);

    expect(getByText('Mailboxes')).toBeInTheDocument();
    expect(getByText('Inbox')).toBeInTheDocument();
    expect(getByText('Starred')).toBeInTheDocument();
    expect(getByText('Bin')).toBeInTheDocument();
    expect(getByText('Sent')).toBeInTheDocument();
    expect(getByText('All')).toBeInTheDocument();
  });
});
