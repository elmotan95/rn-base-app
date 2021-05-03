import React from 'react';
import {AppContext, TAppContext} from '../../../context/AppContext';
import LoginScreen from '../LoginScreen';

const AuthWrapper: React.FC = ({children}) => {
  const {isAuth} = React.useContext(AppContext) as TAppContext;
  if (isAuth) {
    return <>{children}</>;
  } else {
    return <LoginScreen />;
  }
};

export default AuthWrapper;
