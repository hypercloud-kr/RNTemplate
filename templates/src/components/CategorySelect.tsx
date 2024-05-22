import React from 'react';
import {ScrollView, Text} from 'react-native';
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
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <CircleWrapper key={index}>
          <CircleButton bgColor={category.bgColor}>
            <Text style={{fontSize: 18, fontWeight: 500, color: '#333'}}>
              {category.name.substring(0, 1)}
            </Text>
          </CircleButton>
          <Text style={{color: 'white', fontWeight: 400}}>{category.name}</Text>
        </CircleWrapper>
      ))}
    </ScrollView>
  );
};

const CircleWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const CircleButton = styled.TouchableOpacity<{bgColor: string}>`
  width: 50px;
  height: 50px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
`;

export default CategorySelect;
