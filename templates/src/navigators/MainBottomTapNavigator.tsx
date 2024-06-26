import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import {useTheme} from '@/theme';
// import type {ApplicationStackParamList} from '@/types/navigation';

import HomeNavigation from './stack/HomeNavigation';
import ContentNavigation from './stack/ContentNavigation';
import MapNavigation from './stack/MapNavigation';
import SettingNavigation from './stack/SettingNavigation';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

function MainBottomTapNavigator() {
  const tabBarScreenOptions: BottomTabNavigationOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: Colors.darker,
    },
    headerTintColor: '#fff',
    // headerLeft: ({tintColor}) => (
    //   <MaterialCommunityIcons name="bell" color={tintColor} size={26} />
    // ),
    headerTitleContainerStyle: {
      // margin: 0,
      // borderWidth: 1,
      // borderColor: 'red',
    },
    headerLeftContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 1,
      // borderColor: 'red',
      marginLeft: 10,
    },
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#74f5f4',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: 'black',
    },
  };

  // const {variant, navigationTheme} = useTheme();

  const createTabBarIcon = (iconName: string) => {
    return ({color}) => (
      <MaterialCommunityIcons name={iconName} color={color} size={26} />
    );
  };

  const getTabBarIcon = useCallback(
    (iconName: string) => createTabBarIcon(iconName),
    [],
  );

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{...tabBarScreenOptions}}>
        <Tab.Screen
          name="Home"
          options={{tabBarIcon: getTabBarIcon('home')}}
          component={HomeNavigation}
        />
        <Tab.Screen
          name="Content"
          options={{tabBarIcon: getTabBarIcon('gamepad-variant')}}
          component={ContentNavigation}
        />
        <Tab.Screen
          name="Map"
          options={{tabBarIcon: getTabBarIcon('map-marker-radius')}}
          component={MapNavigation}
        />
        <Tab.Screen
          name="Setting"
          options={{tabBarIcon: getTabBarIcon('account')}}
          component={SettingNavigation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainBottomTapNavigator;
