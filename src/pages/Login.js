import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo'
import Form from '../components/Form'
import {Actions} from 'react-native-router-flux'

export default class Login extends Component<{}> {

  signUp() {
    Actions.signup()
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Form type="Login"/>
        <View style={styles.signUpTextCont}>
          <Text style={styles.signUpText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={this.signUp}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 50,
    flexDirection: 'row'
  },
  signUpText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 18,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 18,
  }
});