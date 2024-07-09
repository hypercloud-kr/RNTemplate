import {Text, Dimensions, PixelRatio, View} from 'react-native';
import React, {Component} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

const ContentMainScreen = ({navigation}) => {
  const navigateToWebView = (uri: string) => {
    navigation.navigate('CommonStack', {screen: 'WebView', params: {uri}});
  };
  const {width, height} = Dimensions.get('window');

  // Get the screen pixel density
  const pixelDensity = PixelRatio.get();

  console.log('Screen width : ' + width);
  console.log('Screen height : ' + height);
  console.log('Screen pixel density : ' + pixelDensity);
  return (
    <Container>
      <StyledButton
        onPress={() => navigateToWebView('https://hyper-ball.hars.kr/Zpjcc')}>
        <FastImage
          style={{
            flex: 0.8,
            width: '100%',
            height: '100%',
          }}
          source={require('../../assets/cafe_game.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={{color: 'white', flex: 0.2, fontWeight: '700'}}>
          서둘러 카페로
        </Text>
      </StyledButton>
      <StyledButton
        onPress={() =>
          navigateToWebView('https://coffee-maker.dev.hars.kr/2bYp9')
        }>
        <FastImage
          style={{
            flex: 0.8,
            width: '100%',
            height: '100%',
          }}
          source={require('../../assets/cup.png')}
          resizeMode={FastImage.resizeMode.contain}
        />

        <Text style={{color: 'white', flex: 0.2, fontWeight: '700'}}>
          커피 스택
        </Text>
      </StyledButton>
      <StyledButton
        onPress={() =>
          navigateToWebView('https://xr-sample-face.hyper-cloud.kr')
        }>
        <FastImage
          style={{
            flex: 0.8,
            width: '100%',
            height: '100%',
          }}
          source={require('../../assets/twing_icon.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={{color: 'white', flex: 0.2, fontWeight: '700'}}>
          XR Face
        </Text>
      </StyledButton>
      <StyledButton>
        <FastImage
          style={{
            flex: 0.8,
            width: '100%',
            height: '100%',
          }}
          source={require('../../assets/comming-soon.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={{color: 'white', flex: 0.2, fontWeight: '700'}}>
          준비 중
        </Text>
      </StyledButton>
    </Container>
  );
};
// 'https://hyper-ball.hars.kr/Zpjcc'
export default ContentMainScreen;

const Container = styled.View`
  padding-top: 10px;
  background-color: ${Colors.darker};
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledButton = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  background-color: #3d3b3b;
  border: #4e4e4e 1px solid;
  margin: 15px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  elevation: 8;
`;
