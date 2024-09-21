import AsyncStorage from '@react-native-async-storage/async-storage';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

export const AUTH_USER_EMAIL = 'auth-user-email';
export const AUTH_USER_NAME = 'auth-user-name';

export const createTables = (db: SQLiteDatabase) => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Auth (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, username TEXT);',
      [],
      () => {
        console.log('success');
      },
      error => {
        console.log(error);
      },
    );
  });
};

export const createUser = async (
  db: SQLiteDatabase,
  email: string,
  username: string,
) => {
  await AsyncStorage.setItem(AUTH_USER_EMAIL, email);
  await AsyncStorage.setItem(AUTH_USER_NAME, username);
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Auth (email, username) VALUES (?, ?);',
      [email, username],
      (tx, results) => {
        console.log('user created');
      },
      error => {
        console.log(error);
      },
    );
  });
};
