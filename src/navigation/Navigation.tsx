import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Feed} from '../screens/Feed';
import {AuthContext} from '../context/AuthContext';
import {Auth} from '../screens/Auth';
import {RootStackEnum} from '../shared/config/routes';
import {navigatorStyles} from './styles';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={navigatorStyles}>
    <Stack.Screen name={RootStackEnum.FEED} component={Feed} />
  </Stack.Navigator>
);

export const Navigation = () => {
  const {isAuth} = React.useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuth ? <FeedNavigator /> : <Auth />}
    </NavigationContainer>
  );
};
