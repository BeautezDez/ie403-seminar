// Hide React Navigation Header on Press of a Button
// https://aboutreact.com/hide-header-on-button-click/

import React ,{ useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionBarImage from '../imageIconButton/ActionBarImage'


const HomeActivity2 = ({navigation}) => {
  const [showHeader, setShowHeader] = useState(true);

  const toggleHeader = () => {
    setShowHeader(!showHeader);
    navigation.setOptions({headerShown: showHeader});
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft: () => <ActionBarImage />,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Hide/Show React Navigation Header on Button Press
        </Text>
        <Text>Click on the below button to toggle the header</Text>

        <TouchableOpacity
          onPress={toggleHeader}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.TextStyle}>
            {showHeader ? 'Show Header' : 'Hide Header'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeActivity2;

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
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
