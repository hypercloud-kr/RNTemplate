import {NativeModules, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export default function ContentsButton({item}: any) {
  const imageMap = {
    test1: require('../assets/test1.png'),
    test2: require('../assets/timesale.png'),
    test3: require('../assets/test3.png'),
    test4: require('../assets/test4.png'),
  };

  const imageSource = imageMap[item.image];

  const moveActivity = (id: number) => {
    const {CalendarModule} = NativeModules;
    CalendarModule.goToUnityActivity(id);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>{item.title}</Title>
        {item.more && (
          <More>
            <Text>더보기</Text>
          </More>
        )}
      </HeaderWrapper>
      <ContentWrapper onPress={() => moveActivity(29)}>
        <View style={{flex: 0.7, justifyContent: 'center'}}>
          <Text
            style={{
              paddingLeft: 20,
              color: 'white',
              fontWeight: '700',
              fontSize: 20,
            }}>
            {item.title}
          </Text>
        </View>
        <FastImage
          style={{
            flex: 0.3,
            paddingLeft: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
          source={imageSource}
          resizeMode={FastImage.resizeMode.stretch}></FastImage>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  margin: 10px;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ContentWrapper = styled.TouchableOpacity`
  background-color: #3d3b3b;
  border: #4e4e4e 1px solid;
  border-radius: 10px;
  flex-direction: row;
  height: 105px;
  margin: 10px 0;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
const More = styled.View``;
