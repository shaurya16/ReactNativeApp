import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';

import Routes from './src/Routes'
import store from './src/config/store'
import Signup from './src/pages/Signup.js';

const App: () => React$Node = () => {
  return (
    <>
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Signup></Signup>
      </View>
    </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
