import {render} from '@testing-library/react-native';
import React from 'react';
import AppContextProvider from '../../../context/AppContext';
import SettingScreen from '../SettingScreen';

describe('HomeScreen Snapshot test', () => {
  it('should render correctly', () => {
    const tree = render(
      <AppContextProvider>
        <SettingScreen />
      </AppContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
