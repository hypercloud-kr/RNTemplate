import React, {useRef, useState} from 'react';

import {View} from 'react-native';
import {
  type MapType,
  type NaverMapViewRef,
  type Camera,
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';

import {formatJson} from '@mj-studio/js-util';

const Cameras = {
  Seolleung: {
    latitude: 37.50497126,
    longitude: 127.04905021,
    zoom: 14,
  },
  Gangnam: {
    latitude: 37.498040483,
    longitude: 127.02758183,
    zoom: 14,
  },
  Jeju: {
    latitude: 33.39530773,
    longitude: 126.54656715029,
    zoom: 8,
  },
  LotteWorld: {
    latitude: 37.511435,
    longitude: 127.098753,
    zoom: 16,
  },
  HyperCloud: {
    longitude: 127.02206354524793,
    latitude: 37.516025829747036,
    zoom: 20.0,
    bearing: 64,
  },
} satisfies Record<string, Camera>;

/**
 * @private
 */
const MapTypes = [
  'Basic',
  'Navi',
  'Satellite',
  'Hybrid',
  'Terrain',
  'NaviHybrid',
  'None',
] satisfies MapType[];

type pointType = {
  latitude: number;
  longitude: number;
  name: string;
  id: number;
};

export default function MapScreen({navigation}) {
  const ref = useRef<NaverMapViewRef>(null);

  const [camera, setCamera] = useState(Cameras.HyperCloud);
  const [nightMode, setNightMode] = useState(false);
  const [indoor, setIndoor] = useState(true);
  const [mapType, setMapType] = useState<MapType>(MapTypes[0]!);
  const [symbolScale, setSymbolScale] = useState(1);
  const [lightness, setLightness] = useState(0);
  const [compass, setCompass] = useState(true);
  const [scaleBar, setScaleBar] = useState(true);
  const [zoomControls, setZoomControls] = useState(true);
  const [indoorLevelPicker, setIndoorLevelPicker] = useState(true);
  const [myLocation, setMyLocation] = useState(true);

  const points: Array<pointType> = [
    {
      id: 69,
      name: 'Sally3',
      latitude: 37.516124,
      longitude: 127.0221399,
    },
    {
      id: 92,
      name: '출입문',
      latitude: 37.516033,
      longitude: 127.0221637,
    },
    {
      id: 51,
      name: 'Dante',
      latitude: 37.516055148601964,
      longitude: 127.02211298123103,
    },
    {
      id: 85,
      name: 'Woody',
      latitude: 37.51607205419303,
      longitude: 127.02202089474883,
    },
    {
      id: 81,
      name: '아일랜드 테이블',
      latitude: 37.51599667379904,
      longitude: 127.02209137412524,
    },
    {
      id: 59,
      name: '테라스',
      latitude: 37.5160467,
      longitude: 127.0219474,
    },
    {
      id: 94,
      name: '화이트홀',
      latitude: 37.5160064,
      longitude: 127.0219705,
    },
    {
      id: 88,
      name: '화장실',
      latitude: 37.5159567,
      longitude: 127.0220165,
    },
  ];

  const goToUnity = (id: number) => {
    navigation.navigate('Unity', {id});
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <NaverMapView
          camera={camera}
          ref={ref}
          style={{flex: 1}}
          mapType={mapType}
          isIndoorEnabled={indoor}
          symbolScale={symbolScale}
          lightness={lightness}
          isNightModeEnabled={nightMode}
          isShowCompass={compass}
          isShowIndoorLevelPicker={indoorLevelPicker}
          isShowScaleBar={scaleBar}
          isShowZoomControls={zoomControls}
          isShowLocationButton={myLocation}
          isExtentBoundedInKorea
          locale={'ko'}
          animationEasing={'Fly'}
          onTapMap={args => console.log(`Map Tapped: ${formatJson(args)}`)}>
          {points.map(point => (
            <NaverMapMarkerOverlay
              key={point.id}
              latitude={point.latitude}
              longitude={point.longitude}
              onTap={() => goToUnity(point.id)}
              width={30}
              height={40}
              caption={{
                text: point.name,
              }}
            />
          ))}
        </NaverMapView>
      </View>
    </View>
  );
}
