import React from 'react';

export type TAppContext = {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
};

interface IContext {
  ctxAuth?: boolean;
  children: React.FC | Element;
}

export const AppContext = React.createContext<TAppContext | null>(null);

const AppContextProvider: React.FC<IContext> = ({
  ctxAuth = false,
  children,
}) => {
  const [isAuth, setIsAuth] = React.useState(ctxAuth);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth: value => {
          setIsAuth(value);
        },
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
