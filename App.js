import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import Header from './components/Header'

export default class App extends React.Component {

  render() { 
    return (
      <View style={styles.container}>
        <Header
        />
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
