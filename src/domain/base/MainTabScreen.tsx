import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import React from 'react';
import SettingScreen from './SettingScreen';
import {RootStackParamList} from '../../navigations/types';

export type MainTabParamList = RootStackParamList & {
  HomeScreen: undefined;
  SettingScreen: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="SettingScreen" component={SettingScreen} />
  </Tab.Navigator>
);

export default MainTabScreen;
