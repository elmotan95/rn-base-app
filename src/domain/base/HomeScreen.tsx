import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppContext, TAppContext} from '../../context/AppContext';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from './MainTabScreen';

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  MainTabParamList,
  'HomeScreen'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({navigation}: Props) => {
  const {isAuth} = React.useContext(AppContext) as TAppContext;
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>{'is Auth: ' + isAuth}</Text>
      <Button
        title={'Nav to Feature One Screen'}
        onPress={() => {
          navigation.navigate('FeatureOneScreen');
        }}
      />
      <Button
        title={'Nav to Feature Two Screen'}
        onPress={() => {
          navigation.navigate('FeatureTwoScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
