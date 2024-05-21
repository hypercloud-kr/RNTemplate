import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {Example, Startup} from '@/screens';
// import {useTheme} from '@/theme';
// import type {ApplicationStackParamList} from '@/types/navigation';
import MapMainScreen from '../../screens/Map/MapMainScreen';

const Stack = createStackNavigator();

function MapNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MapMain" component={MapMainScreen} />
    </Stack.Navigator>
  );
}

export default MapNavigation;
