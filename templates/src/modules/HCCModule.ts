import {Platform, NativeModules} from 'react-native';
const {HyperCloudConnect, HyperCloudConnectIOS, EventManager, EventManagerIOS} =
  NativeModules;

const ARViewModule = Platform.select({
  ios: HyperCloudConnectIOS,
  android: HyperCloudConnect,
});

const EventModule = Platform.select({
  ios: EventManagerIOS,
  android: EventManager,
});

export {ARViewModule, EventModule};
