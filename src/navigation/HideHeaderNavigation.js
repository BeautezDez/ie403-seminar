import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeActivity from '../pages/navigationHeaderPropsPages/hideNavigationHeader/HomeActivity3';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      //screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Home"
        component={HomeActivity}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;
