// Hide React Navigation Header on Press of a Button
// https://aboutreact.com/hide-header-on-button-click/

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeActivity2 from '../pages/navigationHeaderPropsPages/hideNavigationButtonHeader/HomeActivity2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="HomeActivity2">
        <Stack.Screen
          name="HomeActivity2"
          component={HomeActivity2}
          options={{
            title: 'First Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
};

export default App;