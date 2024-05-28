import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {Example, Startup} from '@/screens';
// import {useTheme} from '@/theme';
// import type {ApplicationStackParamList} from '@/types/navigation';

import WebViewScreen from '../../screens/Content/WebViewScreen';
import UnityScreen from '../../screens/Unity/UnityScreen';

const Stack = createStackNavigator();

function CommonNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WebView" component={WebViewScreen} />
      <Stack.Screen name="Unity" component={UnityScreen} />
    </Stack.Navigator>
  );
}

export default CommonNavigation;
