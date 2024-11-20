import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeActivity from '../pages/navigationHeaderPropsPages/imageIconButton/HomeActivity';
import ActionBarImage from '../pages/navigationHeaderPropsPages/imageIconButton/ActionBarImage';

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
      }}>
      <Stack.Screen
        name="HomeActivity"
        component={HomeActivity}
        options={{
          title: 'Home',
          headerLeft: () => <ActionBarImage />,
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
