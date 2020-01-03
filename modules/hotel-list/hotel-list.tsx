import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import ItemHotel from './item-hotel/item-hotel';
import { SearchBar } from 'react-native-elements';

import { HotelService } from "../services/hotel-service";

const HotelList = ({ navigation }) => {

  const [search, setSearch] = useState('')

  useEffect(() => {
    // getHotels()
  }, [])

  const getHotels = () => {
    HotelService.getAll().then(response => {
      if (!response) return
      console.log(response);
    })
  }

  const hotelList = [
    {
      "_id": "5e0e0e235e38323054d37f5b",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "Hotel Palo alto",
      "stars": 4,
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f51",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "Santiago Rodriguez",
      "stars": 4,
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f52",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": 3,
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f53",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": 4,
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f54",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": 0,
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f55",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": 4,
      "price": 2000
    }
  ]

  return (
    <ScrollView style={{ backgroundColor: '#e7e7e7' }}>

      <SearchBar
        placeholder="Busca un hotel aquí..."
        containerStyle={{ backgroundColor: 'white', padding: 0, margin: 10, marginBottom: 0, borderRadius: 3, overflow: 'hidden' }}
        inputContainerStyle={{ backgroundColor: 'white' }}
        onChangeText={(e) => setSearch(e)}
        value={search}
        clearButtonMode={'always'}
        lightTheme
      />

      {hotelList.filter(e => {
        return e.name.toUpperCase().indexOf(search.toUpperCase().trim()) > -1
      }).map((item, i) => (
        <ItemHotel key={i}
          id={item._id}
          hotelName={item.name}
          price={item.price}
          stars={item.stars}
          navigation={navigation} />
      )
      )}
    </ScrollView>
  )
}

export default HotelList
