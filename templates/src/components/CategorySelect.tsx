import React, {useEffect} from 'react';
import {Platform, ScrollView, StatusBar, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {NativeModules} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const categories = [
  {name: 'Sally', id: 69, bgColor: '#FFDDDD'},
  {name: 'Dante', id: 51, bgColor: '#DDAAFF'},
  {name: 'Woody', id: 85, bgColor: '#AAFFDD'},
  {name: 'Table', id: 81, bgColor: '#FFDDAA'},
  {name: 'WhiteHall', id: 94, bgColor: '#AADDFF'},
  {name: 'Toilet', id: 88, bgColor: '#DDFFAA'},
  {name: 'Terrace', id: 59, bgColor: '#FFAAAA'},
];

const CategorySelect = () => {
  const navigation = useNavigation();
  const {CalendarModule, Counter} = NativeModules;
  // const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();

  const onSubmit = async () => {
    try {
      const eventId = await CalendarModule.createCalendarEvent(
        'Party',
        'My House',
      );
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };

  const moveActivity = (id: number) => {
    if (Platform.OS === 'android') {
      // CalendarModule.createCalendarEvent(
      //   'testName',
      //   'testLocation',
      //   (error, eventId) => {
      //     if (error) {
      //       console.error(`Error found! ${error}`);
      //     }
      //     console.log(`event id ${eventId} returned`);
      //   },
      // );
      // CalendarModule.createCalendarEvent(
      //   'Party',
      //   'My House',
      //   (eventId: number) => {
      //     console.log(`Created a new event with id ${eventId}`);
      //   },
      // );
      // console.log('moveActivity');
      // console.log(DEFAULT_EVENT_NAME);
      // CalendarModule.createCalendarEvent('testName', 'testLocation');
      CalendarModule.goToUnityActivity(id);
    } else {
      Counter.increment(id);
      // RCTCalendarModule.createCalendarEvent('Meeting', 'Office', 1234567890);
      // goToUnity(id);
    }
  };

  const imageMap = {
    Dante: require('../assets/Donald.png'),
    Sally: require('../assets/Bona.png'),
    Woody: require('../assets/Bella.png'),
    Table: require('../assets/Ralph.png'),
    WhiteHall: require('../assets/Will.png'),
    Toilet: require('../assets/Donald.png'),
    Terrace: require('../assets/Bona.png'),
  };

  const goToUnity = (id: number) => {
    moveActivity(id);
    // navigation.navigate('CommonStack', {screen: 'Unity', params: {id}});
  };

  // useEffect(() => {
  //   const eventEmitter = new NativeModules.NativeEventEmitter(CalendarModule);
  //   let eventListener = eventEmitter.addListener('EventReminder', event => {
  //     console.log(event.eventProperty); // "someValue"
  //   });

  //   console.log(eventListener);
  //   // Removes the listener once unmounted
  //   return () => {
  //     eventListener.remove();
  //   };
  // }, [CalendarModule]);

  const triggerNativeEvent = () => {
    CalendarModule.triggerEvent();
  };

  // useEffect(() => {
  //   // Example call to the native method
  //   MyLifecycleModule.logLifecycleEvent('App mounted');

  //   return () => {
  //     // Example call to the native method
  //     MyLifecycleModule.logLifecycleEvent('App unmounted');
  //   };
  // }, [MyLifecycleModule]);

  // useEffect(() => {
  //   StatusBar.setHidden(true, 'slide');
  //   return () => {};
  // }, []);

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
