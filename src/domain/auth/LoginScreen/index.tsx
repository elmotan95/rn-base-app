import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppContext, TAppContext} from '../../../context/AppContext';

const LoginScreen = ({}) => {
  const {isAuth} = React.useContext(AppContext) as TAppContext;
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Text>{'is Auth: ' + isAuth}</Text>
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

export default LoginScreen;
