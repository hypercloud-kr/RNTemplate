import React, {useRef, useEffect} from 'react';

// import UnityView from '@azesmway/react-native-unity';
import {View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
type RootStackParamList = {
  Unity: {id: number}; // Define the shape of the params for the Unity screen
};

type UnityScreenRouteProp = RouteProp<RootStackParamList, 'Unity'>;
interface IMessage {
  gameObject: string;
  methodName: string;
  message: any;
}

const UnityScreen = ({route}: {route: UnityScreenRouteProp}) => {
  // const unityRef = useRef<UnityView>(null);
  const {id} = route.params;

  useEffect(() => {
    // if (unityRef?.current) {
    //   const message: IMessage = {
    //     gameObject: 'UnityMessageManager',
    //     methodName: 'onRNMessage',
    //     message: JSON.stringify({name: 'SetDestination', data: id}),
    //   };
    //   unityRef.current.postMessage(
    //     message.gameObject,
    //     message.methodName,
    //     message.message,
    //   );
    // }
  }, [id]);

  const handleUnityMessage = (result: any) => {
    console.log('Received message from Unity:', result.nativeEvent.message);
  };

  return (
    <View style={{flex: 1}}>
      {/* <UnityView
        ref={unityRef}
        onUnityMessage={handleUnityMessage} // Set the callback function
        fullScreen={false}
        style={{flex: 1}}
      /> */}
    </View>
  );
};

export default UnityScreen;
