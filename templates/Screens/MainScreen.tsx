/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {
  Button,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';

function MainScreen({navigation}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'ios') {
      requestMultiple([
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      ]).then(statuses => {
        console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
        console.log('Location', statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);
      });
    } else {
      requestMultiple([
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ]).then(statuses => {
        console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
        console.log(
          'Location',
          statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
        );
      });
    }
  };

  const goToSceondScreen = () => {
    navigation.navigate('Map');
  };

  return (
    <View style={{flex: 1, width: '100%'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="Go To Map" onPress={goToSceondScreen} />
        </View>
      </ScrollView>
    </View>
  );
}

export default MainScreen;
