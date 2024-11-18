import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

const SecondPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is Second Page of the App
            {'\n'}
          </Text>
          <Text>{route.params.someParam}</Text>
          {/* <Button
            title="Go to First Sreen"
            onPress={() => navigation.replace('FirstPage')}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
