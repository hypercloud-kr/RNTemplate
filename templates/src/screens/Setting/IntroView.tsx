import {ScrollView, StyleSheet, Text, View} from 'react-native';

import React from 'react';

type Props = {
  result: string;
};

function IntroView({result}: Props): React.ReactElement {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>{result}</Text>
      </View>
    </ScrollView>
  );
}

export default IntroView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FEE500',
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
