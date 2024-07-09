import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {Example, Startup} from '@/screens';
// import {useTheme} from '@/theme';
// import type {ApplicationStackParamList} from '@/types/navigation';
import ContentMainScreen from '../../screens/Content/ContentMainScreen';
import CommonNavigation from './CommonNavigation';

const Stack = createStackNavigator();

function ContentNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ContentMain" component={ContentMainScreen} />
      <Stack.Screen name="CommonStack" component={CommonNavigation} />
    </Stack.Navigator>
  );
}

export default ContentNavigation;
