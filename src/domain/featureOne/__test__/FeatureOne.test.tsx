import {render} from '@testing-library/react-native';
import FeatureOneScreen from '../index';
import React from 'react';
import AppContextProvider from '../../../context/AppContext';

describe('FeatureOne Snapshot test', () => {
  it('should render correctly', () => {
    const tree = render(
      <AppContextProvider>
        <FeatureOneScreen />
      </AppContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
