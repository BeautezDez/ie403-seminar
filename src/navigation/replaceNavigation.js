import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';

const Stack = createNativeStackNavigator();

const ReplaceNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
          height: 'auto'
        },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 16},
      }}>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'First Page',
        }}
      />
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page',
        }}
      />
    </Stack.Navigator>
  );
};

export default ReplaceNavigation;
