import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Form extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            placeholder="Email"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType={"email-address"}
            onSubmitEditing={() => this.password.focus()}>
          </TextInput>
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            ref={(input) => this.password = input}>
          </TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.type}</Text>
          </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    inputBox: {
        height: 50,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 20,
        marginVertical: 10,
    },
    button: {
        height: 50,
        width: 300,
        backgroundColor: '#1d313a',
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
        paddingVertical: 14
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
    },

  });
