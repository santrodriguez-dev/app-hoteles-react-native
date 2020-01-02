import React from 'react';
import { HotelList, HotelDetail } from './modules';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    HotelList: { screen: HotelList },
    HotelDetail: { screen: HotelDetail }
  },
  {
    initialRouteName: 'HotelList',
  }
);

const App = createAppContainer(MainNavigator);

export default App;

// export default function App() {
//   return <HotelList />
// }
