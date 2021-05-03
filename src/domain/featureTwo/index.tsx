import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppContext, TAppContext} from '../../context/AppContext';
import AuthWrapper from '../auth/HOC/AuthWrapper';

const FeatureTwoScreen = () => {
  const {isAuth, setIsAuth} = React.useContext(AppContext) as TAppContext;
  return (
    <AuthWrapper>
      <View style={styles.container}>
        <Text>Feature Two Screen</Text>
        <Button
          title={`Set Auth to ${!isAuth}`}
          onPress={() => {
            setIsAuth(!isAuth);
          }}
        />
      </View>
    </AuthWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FeatureTwoScreen;
