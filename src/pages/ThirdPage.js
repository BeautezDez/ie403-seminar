import React, {useEffect, useState} from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const ThirdPage = ({navigation, route}) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      // Interval to update count
      const interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
  
      // Subscribe for the focus Listener
      const unsubscribe = navigation.addListener('focus', () => {
        if (route.params?.number !== undefined) {
          setCount(route.params.number); 
        }
      });
  
      return () => {
        clearTimeout(interval);
        unsubscribe;  
      };
    }, [navigation, route.params?.number]);  // Add route.params.number to the dependency array
  
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
              This is the First Page of the app
            </Text>
            <Text style={{textAlign: 'center', paddingVertical: 10}}>
              Counter will reset when you came back from the Second Screen
            </Text>
            <Text>Count: {count}</Text>
            <Button
              title="Go to Second Screen"
              onPress={() => navigation.navigate('FourthPage', {number: count})}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ThirdPage;
  