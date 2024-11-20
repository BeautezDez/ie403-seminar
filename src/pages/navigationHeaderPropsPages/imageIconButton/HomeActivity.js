import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import ActionBarImage from './ActionBarImage';

const HomeActivity = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <ActionBarImage />,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          marginVertical: 10,
        }}>
        3 Ways to Add Image Icon Inside Navigation Bar
        in React Native
      </Text>
    </SafeAreaView>
  );
};

export default HomeActivity;