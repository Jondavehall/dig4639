import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';

  export default class Detail extends React.Component {
  static navigationOptions = {
  title: 'Cats',
    };

  render() {
  return (
    <ImageBackground
    style={{ flex: 1 }}
    source={require('../assets/images/img1.jpg')}
    >

    <View style={styles.MainContainer}>
    <Image
    source={require('../assets/images/img2.jpg')}
    style={{ width: 200, height: 200, marginTop: 10 }}
    />

    <Text style={styles.TextStyle}>Cat images!</Text>
    </View>
    </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  TextStyle: {
    color: '#0250a3',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});
