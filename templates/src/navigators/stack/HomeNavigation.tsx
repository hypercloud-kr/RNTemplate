import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {Example, Startup} from '@/screens';
// import {useTheme} from '@/theme';
// import type {ApplicationStackParamList} from '@/types/navigation';
import HomeMainScreen from '../../screens/Home/HomeMainScreen';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMain" component={HomeMainScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
