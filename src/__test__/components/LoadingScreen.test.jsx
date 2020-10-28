import React from 'react';
import { render } from '@testing-library/react';

import LoadingScreen from './../../components/LoadingScreen';

describe('components/LoadingScreen', () => {
  test('defaultProps', () => {
    expect(LoadingScreen.defaultProps.text).toBe('LOADING');
  });

  it('renders default text', () => {
    const { container } = render(<LoadingScreen />);
    expect(container).toHaveTextContent('LOADING');
  });

  it('renders custom loading text', () => {
    const { container } = render(
      <LoadingScreen text="Loading test screen..." />,
    );
    expect(container).toHaveTextContent('Loading test screen...');
  });
});
