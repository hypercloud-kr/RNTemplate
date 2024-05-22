import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export class ContentMainScreen extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.darker,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>ContentMainScreen</Text>
      </View>
    );
  }
}

export default ContentMainScreen;
