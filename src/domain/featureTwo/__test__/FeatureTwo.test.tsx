import {render} from '@testing-library/react-native';
import React from 'react';
import AppContextProvider from '../../../context/AppContext';
import FeatureTwoScreen from '../index';

describe('FeatureTwo Snapshot test', () => {
  it('should render correctly', () => {
    const tree = render(
      <AppContextProvider>
        <FeatureTwoScreen />
      </AppContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
