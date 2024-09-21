import {useContext, useEffect} from 'react';
import {Login} from './Login';
import {Alert} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {createTables, createUser} from './const';
import {AuthContext} from '../../context/AuthContext';
import {StyledSafeAreaView} from './styles';

const db = SQLite.openDatabase(
  {
    name: 'myDatabase.db',
    location: 'default',
  },
  () => {
    console.log('db opened');
  },
  error => {
    console.log('error: ' + error);
  },
);

export const Auth = () => {
  const {setIsAuth, setUsername} = useContext(AuthContext);

  useEffect(() => {
    createTables(db);
  }, []);

  const onLogin = async (email: string, username: string) => {
    if (email.trim().length && username.trim().length) {
      createUser(db, email, username);
      setUsername(username);
      setIsAuth(true);
      db.close(
        () => {
          console.log('db closed');
        },
        error => {
          console.log(error);
        },
      );
    } else {
      Alert.alert('Error', 'Check fields');
    }
  };

  return (
    <StyledSafeAreaView>
      <Login onLogin={onLogin} />
    </StyledSafeAreaView>
  );
};
