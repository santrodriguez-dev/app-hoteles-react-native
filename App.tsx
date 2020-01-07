import React from 'react';
import { HotelList, HotelDetail, TestNotification } from './modules';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text } from 'react-native';

const MainNavigator = createStackNavigator(
  {
    HotelList: {
      screen: HotelList, navigationOptions: {
        headerTitle: () => <Text style={Styles.card}>Lista de hoteles</Text>,
        gestureDirection: 'vertical-inverted',
        // headerLeft: null,
        gestureEnabled: false
      },
    },
    HotelDetail: {
      screen: HotelDetail, navigationOptions: {
        headerTitle: () => <Text style={Styles.card}>Hotel</Text>,
      }
    },
    TestNotification: {
      screen: TestNotification, navigationOptions: {
        headerTitle: () => <Text style={Styles.card}>Notifications</Text>,
        gestureDirection: 'vertical',
        // headerShown: false
      }
    }
  },
  {
    initialRouteName: 'HotelList',
  }
);

const App = createAppContainer(MainNavigator);

const Styles = StyleSheet.create({
  card: {
    fontWeight: 'bold',
    fontSize: 25
  }
});

export default App;
