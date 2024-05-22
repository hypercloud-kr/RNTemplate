import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SettingMainScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.darker,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>SettingMainScreen</Text>
    </View>
  );
};

export default SettingMainScreen;
