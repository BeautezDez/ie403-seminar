// React Navigation Header Customization in RN using Navigation Options
// https://aboutreact.com/custom-header-using-navigation-options-in-react-native/

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const SecondPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Second Page', //Set Header Title
      headerStyle: {
        backgroundColor: '#f4511e', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => alert('Left Menu Clicked')}
          style={{marginLeft: 10}}>
          <Text style={{color: 'white'}}>Left Menu</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => alert('Right Menu Clicked')}
          style={{marginRight: 10}}>
          <Text style={{color: 'white'}}>Right Menu</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Navigation Header Customisation in
          RN using Navigation Options
        </Text>
        <Text>Left and Right Custom navigation bar</Text>
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 16,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});