
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';

import LinearGradientButton from './component/LinearGradientButton';

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradientButton text="注册"
                              opacity={0.75}
                              style={{width: "80%",height: 46,marginTop: 100}}
                              gradientColor={['#FCC90A', '#F5480C', '#F1000A']}
                              onPress={() => { console.log('123')}}/>

        <LinearGradientButton text="登录"
                              opacity={0.75}
                              style={{width: "80%",height: 46,marginTop: 100}}
                              gradientColor={['#FCC90A', '#F5480C', '#F1000A']}
                              onPress={() => { Alert.alert('123')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1
  }
});


export default Root;