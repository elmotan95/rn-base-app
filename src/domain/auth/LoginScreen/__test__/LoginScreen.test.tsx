import {render} from '@testing-library/react-native';
import React from 'react';
import AppContextProvider from '../../../../context/AppContext';
import LoginScreen from '../index';

describe('LoginScreen Snapshot test', () => {
  it('should render correctly', () => {
    const tree = render(
      <AppContextProvider>
        <LoginScreen />
      </AppContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
