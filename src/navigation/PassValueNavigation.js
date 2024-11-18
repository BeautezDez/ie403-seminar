import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FifthPage from '../pages/FifthPage';
import SixthPage from '../pages/SixthPage';

const Stack = createNativeStackNavigator();

const PassValueNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="FifthPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
          height: 'auto',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold', fontSize: 16},
      }}>
      <Stack.Screen
        name="FifthPage"
        component={FifthPage}
        options={{
          title: 'First Page',
        }}
      />
      <Stack.Screen
        name="SixthPage"
        component={SixthPage}
        options={{
          title: 'Second Page',
        }}
      />
    </Stack.Navigator>
  );
};

export default PassValueNavigation;
