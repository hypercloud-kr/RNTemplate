import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import {WebView} from 'react-native-webview';
import {useFocusEffect} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const WebViewScreen = ({route}) => {
  const {uri} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: Colors.darker}}>
      <WebView source={{uri}} style={{flex: 1}} />
    </View>
  );
};

export default WebViewScreen;
