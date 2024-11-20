// React Navigation Header Customization in RN using Navigation Options
// https://aboutreact.com/custom-header-using-navigation-options-in-react-native/

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstPage from '../pages/navigationHeaderPropsPages/headerCustomization/FirstPage'
import SecondPage from '../pages/navigationHeaderPropsPages/headerCustomization/SecondPage'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
      </Stack.Navigator>
  );
};

export default App;