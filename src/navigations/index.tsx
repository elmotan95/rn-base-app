import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainTabScreen from '../domain/base/MainTabScreen';
import FeatureOneScreen from '../domain/featureOne';
import FeatureTwoScreen from '../domain/featureTwo';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabScreen" component={MainTabScreen} />
      <Stack.Screen name="FeatureOneScreen" component={FeatureOneScreen} />
      <Stack.Screen name="FeatureTwoScreen" component={FeatureTwoScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
