import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {Example, Startup} from '@/screens';
// import {useTheme} from '@/theme';
// import type {ApplicationStackParamList} from '@/types/navigation';
import HomeMainScreen from '../../screens/Home/HomeMainScreen';
import CommonNavigation from './CommonNavigation';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMain" component={HomeMainScreen} />
      <Stack.Screen name="CommonStack" component={CommonNavigation} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
