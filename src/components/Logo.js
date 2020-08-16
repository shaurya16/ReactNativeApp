import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Welcome to React Native App!</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    headingText: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    }

  });