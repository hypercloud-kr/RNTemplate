import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  serviceTerms as getKakaoServiceTerms,
  unlink,
} from '@react-native-seoul/kakao-login';
import ResultView from './IntroView';

const SettingMainScreen = () => {
  const [result, setResult] = useState<string>('');

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      setResult(JSON.stringify(token));
    } catch (err) {
      console.error('login err', err);
    }
  };

  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();
      setResult(message);
    } catch (err) {
      setResult('이미 로그아웃 되었습니다.');
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profile = await getKakaoProfile();

      setResult(JSON.stringify(profile));
    } catch (err) {
      setResult('카카오 로그인이 필요합니다.');
    }
  };

  const getShippingAddresses = async (): Promise<void> => {
    try {
      const shippingAddresses = await getKakaoShippingAddresses();
      setResult(JSON.stringify(shippingAddresses));
    } catch (err) {
      setResult('카카오 로그인이 필요합니다.');
    }
  };

  // const getServiceTerms = async (): Promise<void> => {
  //   try {
  //     const serviceTerms = await getKakaoServiceTerms();
  //     setResult(JSON.stringify(serviceTerms));
  //   } catch (err) {
  //     console.error('serviceTerms error', err);
  //   }
  // };

  const unlinkKakao = async (): Promise<void> => {
    try {
      const message = await unlink();
      setResult(message);
    } catch (err) {
      setResult('이미 링크 해제 되었습니다.');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.darker,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <ResultView result={result} />
        <Pressable
          style={styles.button}
          onPress={() => {
            signInWithKakao();
          }}>
          <Text style={styles.text}>카카오 로그인</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => getProfile()}>
          <Text style={styles.text}>프로필 조회</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => getShippingAddresses()}>
          <Text style={styles.text}>배송주소록 조회</Text>
        </Pressable>
        {/* <Pressable style={styles.button} onPress={() => getServiceTerms()}>
          <Text style={styles.text}>서비스 약관 동의 내역 확인</Text>
        </Pressable> */}
        <Pressable style={styles.button} onPress={() => unlinkKakao()}>
          <Text style={styles.text}>링크 해제</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => signOutWithKakao()}>
          <Text style={styles.text}>카카오 로그아웃</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SettingMainScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
  button: {
    backgroundColor: '#FEE500',
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});
