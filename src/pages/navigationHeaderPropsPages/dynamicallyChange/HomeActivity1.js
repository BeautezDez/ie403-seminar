// Dynamically Change React Navigation Value – Update navigationOptions
// https://aboutreact.com/dynamically-change-navigationoptions-value/

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeActivity1 = ({navigation, route}) => {
  const changeHeaderYellow = () => {
    // Function to change navigation options
    navigation.setOptions({
      title: 'Yellow Header',
      headerStyle: {
        backgroundColor: 'yellow', //Set Header color
      },
      headerTintColor: 'black', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
      
    });
  };

  const changeHeaderPink = () => {
    // Function to change navigation options
    navigation.setOptions({
      title: 'Pink Header',
      headerStyle: {
        backgroundColor: 'pink', //Set Header color
      },
      headerTintColor: 'black', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    });
  };

  const changeHeaderOrange = () => {
    // Function to change navigation options
    navigation.setOptions({
      title: 'Orange Header',
      headerStyle: {
        backgroundColor: 'orange', //Set Header color
      },
      headerTintColor: 'black', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Dynamically Change React Navigation Value
          {'\n'}
          Update navigation Options
        </Text>

        {/* Change header color to yellow */}
        <TouchableOpacity
          onPress={changeHeaderYellow}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>APPLY YELLOW COLOR</Text>
        </TouchableOpacity>

        {/* Change header color to pink */}
        <TouchableOpacity
          onPress={changeHeaderPink}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>APPLY PINK COLOR</Text>
        </TouchableOpacity>

        {/* Change header color to orange */}
        <TouchableOpacity
          onPress={changeHeaderOrange}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>APPLY ORANGE COLOR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeActivity1;

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
  buttonStyle: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808080',
    borderRadius: 2,
    marginTop: 12,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});