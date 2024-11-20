import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// Import all screens
import ReplaceNavigation from './replaceNavigation';
import RefreshNavigation from './RefreshNavigation';
import PassValueNavigation from './PassValueNavigation';
import AddImageIconNavigation from './AddImageIconNavigation';
import DynamicallyChangeNavigation from './DynamicallyChangeNavigation';
import HideHeaderButtonNavigation from './HideHeaderButtonNavigation';
import HideHeaderNavigation from './HideHeaderNavigation';
import HeaderCustomizationNavigation from './HeaderCustomizationNavigation';

const Drawer = createDrawerNavigator();

// Screens configuration array
const screens = [
  {
    name: 'ReplaceNavigation',
    component: ReplaceNavigation,
    title: 'Replace Navigation',
  },
  {
    name: 'RefreshNavigation',
    component: RefreshNavigation,
    title: 'Refresh Navigation',
  },
  {
    name: 'PassValueNavigation',
    component: PassValueNavigation,
    title: 'Pass Value Navigation',
  },
  {
    name: 'AddImageIconNavigation',
    component: AddImageIconNavigation,
    title: 'Add Image Icon Navigation',
  },
  {
    name: 'DynamicallyChangeNavigation',
    component: DynamicallyChangeNavigation,
    title: 'Dynamically Change Navigation',
  },
  {
    name: 'HideHeaderButtonNavigation',
    component: HideHeaderButtonNavigation,
    title: 'Hide Header Button Navigation',
  },
  {
    name: 'HideHeaderNavigation',
    component: HideHeaderNavigation,
    title: 'Hide Header Navigation',
  },
  {
    name: 'HeaderCustomizationNavigation',
    component: HeaderCustomizationNavigation,
    title: 'Header Customization Navigation',
  },
];

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
        {screens.map(({name, component, title}) => (
          <Drawer.Screen 
            key={name} 
            name={name} 
            component={component} 
            options={{title}} 
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
