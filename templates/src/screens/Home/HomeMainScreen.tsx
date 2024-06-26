import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import {
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Platform,
  NativeModules,
  Touchable,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import CategorySelect from '../../components/CategorySelect';
import ContentsButton from '../../components/ContentsButton';
// import messaging from '@react-native-firebase/messaging';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export default function HomeMainScreen({navigation}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const contentsData = [
    {
      title: 'AR TimeSale',
      more: false,
      image: 'test2',
      contens: 'AR TimeSale',
    },
    // {
    //   title: 'AR PROJECT1',
    //   more: false,
    //   image: 'test3',
    //   contens: 'AR 프로젝트1',
    // },
    // {
    //   title: 'AR PROJECT2',
    //   more: false,
    //   image: 'test4',
    //   contens: 'AR 프로젝트2',
    // },
  ];

  const useToken = () => {
    const username = storage.getString('token');
    console.log(username);
  };

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

  // const NotificationListner = () => {
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage,
  //     );
  //     // navigation.navigate('HomeMainScreen');
  //   });

  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //         // navigation.navigate('HomeMainScreen');
  //       }
  //     });

  //   messaging().onMessage(async remoteMessage => {
  //     console.log('A new FCM message arrived!', remoteMessage);
  //   });
  // };

  // useEffect(() => {
  //   const getToken = async () => {
  //     try {
  //       const token = await messaging().getToken();
  //       storage.set('token', token);
  //       const userToken = storage.getString('token');
  //       console.log(userToken);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   };
  //   getToken();
  // }, []);

  useEffect(() => {
    requestCameraPermission();
    // NotificationListner();
  }, []);

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
              <FastImage
                style={{height: '100%', width: '100%'}}
                source={require('../../assets/timesale.png')}
                resizeMode={FastImage.resizeMode.cover}
              />
              {/* <SlideItemText>Main Swiper View 1</SlideItemText> */}
            </SlideItem>
            <SlideItem>
              <FastImage
                style={{height: '100%', width: '100%'}}
                source={require('../../assets/main2.png')}
                resizeMode={FastImage.resizeMode.cover}
              />
            </SlideItem>
            <SlideItem>
              <FastImage
                style={{height: '100%', width: '100%'}}
                source={require('../../assets/main3.png')}
                resizeMode={FastImage.resizeMode.cover}
              />
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
        {/* <TouchableOpacity
          style={{height: 100, width: 100, backgroundColor: 'red'}}
          onPress={useToken}
        /> */}
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
