import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {Example, Startup} from '@/screens';
// import {useTheme} from '@/theme';
// import type {ApplicationStackParamList} from '@/types/navigation';
import SettingMainScreen from '../../screens/Setting/SettingMainScreen';

const Stack = createStackNavigator();

function SettingNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingMain" component={SettingMainScreen} />
    </Stack.Navigator>
  );
}

export default SettingNavigation;
