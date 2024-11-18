import React from 'react';
import {Button,View, Text, SafeAreaView} from 'react-native'

const FourthPage = ({route, navigation}) => {
  const number = route?.params?.number;

  const handleGoBack = () => {
    navigation.navigate('ThirdPage', { number: number });
  };

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
            This is the Second Page of the App
          </Text>
          <Text>Count: {number}</Text>
          <Button
            title="Go Back to First Page"
            onPress={handleGoBack}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FourthPage;
