import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppContext, TAppContext} from '../../context/AppContext';

const FeatureOneScreen = () => {
  const {isAuth, setIsAuth} = React.useContext(AppContext) as TAppContext;
  return (
    <View style={styles.container}>
      <Text>Feature One Screen</Text>
      <Button
        title={`Set Auth to ${!isAuth}`}
        onPress={() => {
          setIsAuth(!isAuth);
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

export default FeatureOneScreen;
