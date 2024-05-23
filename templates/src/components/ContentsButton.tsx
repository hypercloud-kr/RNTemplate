import {Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export default function ContentsButton({item}: any) {
  const imageMap = {
    test1: require('../assets/test1.png'),
    test2: require('../assets/test2.png'),
    test3: require('../assets/test3.png'),
    test4: require('../assets/test4.png'),
  };

  const imageSource = imageMap[item.image];

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
      <ContentWrapper>
        <FastImage
          style={{flex: 1, borderRadius: 10}}
          source={imageSource}
          resizeMode={FastImage.resizeMode.stretch}
        />
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
  height: 120px;
  margin: 10px 0;
  padding: 0 5px;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
const More = styled.View``;
