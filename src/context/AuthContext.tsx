import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {ReactNode, createContext, useEffect, useState} from 'react';
import {AUTH_USER_EMAIL, AUTH_USER_NAME} from '../screens/Auth/const';
import {AuthContextTypes} from './interface';

export const AuthContext = createContext({} as AuthContextTypes);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const authUserEmail = AsyncStorage.getItem(AUTH_USER_EMAIL);
    const authUserName = AsyncStorage.getItem(AUTH_USER_NAME);
    authUserEmail.then(userEmail => {
      if (userEmail) {
        setEmail(userEmail);
        setIsAuth(true);
      }
    });
    authUserName.then(user => {
      if (user) {
        setUsername(user);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        email,
        username,
        setUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
