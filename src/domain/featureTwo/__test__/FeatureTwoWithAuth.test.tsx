import {render} from '@testing-library/react-native';
import React from 'react';
import AppContextProvider from '../../../context/AppContext';
import FeatureTwoScreen from '../index';

describe('FeatureTwo Snapshot test', () => {
  it('should render with auth correctly', () => {
    const tree = render(
      <AppContextProvider ctxAuth={true}>
        <FeatureTwoScreen />
      </AppContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
