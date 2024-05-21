import React from 'react';
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

const Tab = createBottomTabNavigator();

function MainBottomTapNavigator() {
  const tabBarScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#74f5f4',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: 'black',
    },
  };

  // const {variant, navigationTheme} = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{...tabBarScreenOptions}}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          component={HomeNavigation}
        />
        <Tab.Screen
          name="Content"
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="sunglasses"
                color={color}
                size={26}
              />
            ),
          }}
          component={ContentNavigation}
        />
        <Tab.Screen
          name="Map"
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
          component={MapNavigation}
        />
        <Tab.Screen
          name="Setting"
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
          component={SettingNavigation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainBottomTapNavigator;
