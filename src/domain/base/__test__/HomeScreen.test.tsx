import {render} from '@testing-library/react-native';
import React from 'react';
import AppContextProvider from '../../../context/AppContext';
import HomeScreen from '../HomeScreen';

describe('HomeScreen Snapshot test', () => {
  it('should render correctly', () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };
    const tree = render(
      <AppContextProvider>
        {/*
        //@ts-ignore*/}
        <HomeScreen navigation={mockNavigation} />
      </AppContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
