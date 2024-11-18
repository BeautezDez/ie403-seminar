import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ThirdPage from '../pages/ThirdPage';
import FourthPage from '../pages/FourthPage';

const Stack = createNativeStackNavigator();

const RefreshNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ThirdPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
          height: 'auto',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold', fontSize: 16},
      }}>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'First Page',
        }}
      />
      <Stack.Screen
        name="FourthPage"
        component={FourthPage}
        options={{
          title: 'Second Page',
        }}
      />
    </Stack.Navigator>
  );
};
export default RefreshNavigation;
