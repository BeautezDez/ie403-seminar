// Dynamically Change React Navigation Value – Update navigationOptions
// https://aboutreact.com/dynamically-change-navigationoptions-value/

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeActivity from '../pages/navigationHeaderPropsPages/dynamicallyChange/HomeActivity1';
import ActionBarImage from '../pages/navigationHeaderPropsPages/imageIconButton/ActionBarImage'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeActivity"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d8d8d8',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => <ActionBarImage />,
      }}>
      <Stack.Screen name="HomeActivity" component={HomeActivity} />
    </Stack.Navigator>
  );
};

export default App;
