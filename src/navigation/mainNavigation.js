import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import ReplaceNavigation from './replaceNavigation';
import RefreshNavigation from './RefreshNavigation';
import PassValueNavigation from './PassValueNavigation'

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ReplaceNavigation"
        screenOptions={{
          drawerStyle: {backgroundColor: '#f0f0f0', width: 240},
          headerStyle: {backgroundColor: '#6200EE'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Drawer.Screen
          name="ReplaceNavigation"
          component={ReplaceNavigation}
          options={{title: 'Replace Navigation'}}
        />
        <Drawer.Screen
          name="RefreshNavigation"
          component={RefreshNavigation}
          options={{title: 'Refresh Navigation'}}
        />
        <Drawer.Screen
          name="PassValueNavigation"
          component={PassValueNavigation}
          options={{title: 'Pass Value Navigation'}}
          />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
