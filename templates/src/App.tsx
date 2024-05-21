import React from 'react';
// import {SafeAreaView, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// import MainScreen from './screens/MainScreen';
// import MapScreen from './screens/MapScreen';
// import UnityScreen from './screens/UnityScreen';
import MainBottomTapNavigator from './navigators/MainBottomTapNavigator';

// const RootStack = createStackNavigator();

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   flex: 1,
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <MainBottomTapNavigator />
    // <NavigationContainer>
    //   <SafeAreaView style={backgroundStyle}>
    //     <RootStack.Navigator
    //       screenOptions={{
    //         headerShown: false,
    //         ...TransitionPresets.SlideFromRightIOS,
    //       }}>
    //       <RootStack.Screen name="Main" component={MainScreen} />
    //       <RootStack.Screen name="Unity" component={UnityScreen} />
    //       <RootStack.Screen name="Map" component={MapScreen} />
    //     </RootStack.Navigator>
    //   </SafeAreaView>
    // </NavigationContainer>
  );
}

export default App;
