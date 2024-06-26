import React from 'react';
import {ScrollView, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

const categories = [
  {name: 'Sally', bgColor: '#FFDDDD'},
  {name: 'Dante', bgColor: '#DDAAFF'},
  {name: 'Woody', bgColor: '#AAFFDD'},
  {name: 'Table', bgColor: '#FFDDAA'},
  {name: 'WhiteHall', bgColor: '#AADDFF'},
  {name: 'Toilet', bgColor: '#DDFFAA'},
  {name: 'Terrace', bgColor: '#FFAAAA'},
];

const CategorySelect = () => {
  const imageMap = {
    Dante: require('../assets/Donald.png'),
    Sally: require('../assets/Bona.png'),
    Woody: require('../assets/Bella.png'),
    Table: require('../assets/Ralph.png'),
    WhiteHall: require('../assets/Will.png'),
    Toilet: require('../assets/Donald.png'),
    Terrace: require('../assets/Bona.png'),
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => {
        return (
          <CircleWrapper key={index}>
            <FastImage
              style={{flex: 1}}
              source={require('../assets/Dante.png')}
              resizeMode={FastImage.resizeMode.center}
            />
            <CircleButton bgColor={category.bgColor}>
              <FastImage
                style={{
                  backgroundColor: 'white',
                  borderRadius: 25,
                  height: 50,
                  width: 50,
                  margin: 1,
                }}
                source={imageMap[category.name]}
                resizeMode={FastImage.resizeMode.contain}
              />
              {/* <Text style={{fontSize: 18, fontWeight: 500, color: '#333'}}>
                {category.name.substring(0, 1)}
              </Text> */}
            </CircleButton>
            <Text style={{color: 'white', fontWeight: 400}}>
              {category.name}
            </Text>
          </CircleWrapper>
        );
      })}
    </ScrollView>
  );
};

const CircleWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const CircleButton = styled.TouchableOpacity<{bgColor: string}>`
  width: 60px;
  height: 60px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
`;

export default CategorySelect;
