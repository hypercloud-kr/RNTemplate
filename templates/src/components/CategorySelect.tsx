import React, {useEffect} from 'react';
import {ScrollView, Text, NativeEventEmitter, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {ARViewModule, EventModule} from '../modules/HCCModule';
// import {openARView, multiply} from 'react-native-hyper-view';

const categories = [
  {name: 'Vincent', id: 2, bgColor: '#FFDDDD'},
  {name: 'Lauren', id: 3, bgColor: '#DDAAFF'},
  {name: 'Ollie', id: 5, bgColor: '#AAFFDD'},
  {name: 'Jun', id: 10, bgColor: '#FFDDAA'},
  {name: 'Whale', id: 14, bgColor: '#AADDFF'},
  {name: 'Liam', id: 15, bgColor: '#DDFFAA'},
];

const CategorySelect = () => {
  const imageMap = {
    Vincent: require('../assets/Donald.png'),
    Lauren: require('../assets/Bona.png'),
    Ollie: require('../assets/Bella.png'),
    Jun: require('../assets/Ralph.png'),
    Whale: require('../assets/Will.png'),
    Liam: require('../assets/Donald.png'),
  };

  // const fetchData = async () => {
  //   const res = await multiply(3, 7);
  //   console.log('------>', res);
  // };

  const moveActivity = (id: number) => {
    // console.log('moveActivity', id);
    // triggerNativeEvent();
    ARViewModule.openARView(id);
    // fetchData();
    // openARView(id);
  };

  const triggerNativeEvent = () => {
    EventModule.triggerEventReminder();
  };

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(EventModule);
    let eventListener = eventEmitter.addListener('onEventReminder', event => {
      console.log(`[${Platform.OS}] RN Side Event:`, event);
      ARViewModule.sendMessage("Hello Unity! I'm from RN do you copy?");
    });

    return () => {
      eventListener.remove();
    };
  }, []);

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
            <CircleButton
              bgColor={category.bgColor}
              // onPress={() => goToUnity('ios', 'test')}>
              // onPress={() => triggerNativeEvent()}>
              onPress={() => moveActivity(categories[index].id)}>
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
