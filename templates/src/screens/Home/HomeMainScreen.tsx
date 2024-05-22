import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

import {
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import CategorySelect from '../../components/CategorySelect';
import ContentsButton from '../../components/ContentsButton';

export default function HomeMainScreen({navigation}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const contentsData = [
    {
      title: 'AR Earth SAVERS',
      more: false,
      image: 'test2',
      contens: 'AR 지구 지킴이',
    },

    {
      title: 'AR PROJECT1',
      more: false,
      image: 'test3',
      contens: 'AR 프로젝트1',
    },
    {
      title: 'AR PROJECT2',
      more: false,
      image: 'test4',
      contens: 'AR 프로젝트2',
    },
  ];

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'ios') {
      requestMultiple([
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      ]).then(statuses => {
        console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
        console.log('Location', statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);
      });
    } else {
      requestMultiple([
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ]).then(statuses => {
        console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
        console.log(
          'Location',
          statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
        );
      });
    }
  };

  return (
    <View style={{flex: 1, width: '100%'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <SwiperWrapper>
          <Swiper
            activeDotColor="white"
            style={{height: 240}}
            autoplay
            autoplayTimeout={5}
            showsButtons={false}>
            <SlideItem>
              <SlideItemText>Main Swiper View 1</SlideItemText>
            </SlideItem>
            <SlideItem>
              <SlideItemText>Main Swiper View 2</SlideItemText>
            </SlideItem>
            <SlideItem>
              <SlideItemText>Main Swiper View 3</SlideItemText>
            </SlideItem>
          </Swiper>
        </SwiperWrapper>
        <CategoryWarpper>
          <Title>길찾기</Title>
          <CategorySelect />
        </CategoryWarpper>
        {contentsData.map((item, index) => (
          <ContentsButton item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const Title = styled.Text`
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const SlideItemText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

const SlideItem = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1cb8b8;
`;

const SwiperWrapper = styled.View``;

const CategoryWarpper = styled.View`
  margin: 20px 10px;
`;
