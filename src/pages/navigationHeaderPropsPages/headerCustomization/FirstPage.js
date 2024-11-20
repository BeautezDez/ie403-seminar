// React Navigation Header Customization in RN using Navigation Options
// https://aboutreact.com/custom-header-using-navigation-options-in-react-native/

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const FirstPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text
          {...props}
          style={{color: 'white', fontWeight: 'bold'}}>
          Custom Title
        </Text>
      ),
      headerStyle: {
        backgroundColor: '#f4511e', //Set Header color
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Navigation Header Customisation in
          RN using Navigation Options
        </Text>
        <Text>Full Customized Header</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('SecondPage')}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>
            Click to see Left and Right align header
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

export default FirstPage;

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