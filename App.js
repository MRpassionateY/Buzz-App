import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FacebookScreen from './screen/fb';
import InstaScreen from './screen/in';
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: FacebookScreen },
  Search: { screen: InstaScreen },
});
const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
