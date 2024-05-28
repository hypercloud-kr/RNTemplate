import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

const ContentMainScreen = ({navigation}) => {
  const navigateToWebView = (uri: string) => {
    navigation.navigate('CommonStack', {screen: 'WebView', params: {uri}});
  };

  return (
    <Container>
      <StyledButton
        onPress={() => navigateToWebView('https://hyper-ball.hars.kr/Zpjcc')}>
        <StyledText>Go to Hyper Ball</StyledText>
      </StyledButton>
      <StyledButton
        onPress={() =>
          navigateToWebView('https://coffee-maker.dev.hars.kr/2bYp9')
        }>
        <StyledText>Go to Coffee Maker</StyledText>
      </StyledButton>
      <StyledButton
        onPress={() =>
          navigateToWebView('https://xr-sample-face.hyper-cloud.kr')
        }>
        <StyledText>Go to XR Sample Face</StyledText>
      </StyledButton>
    </Container>
  );
};
// 'https://hyper-ball.hars.kr/Zpjcc'
export default ContentMainScreen;

const Container = styled.View`
  background-color: ${Colors.darker};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: #333;
`;

const StyledButton = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  margin-bottom: 10px;
  background-color: #74f5f4;
  justify-content: center;
  align-items: center;
`;
