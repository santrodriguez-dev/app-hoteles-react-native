import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import ItemHotel from './item-hotel/item-hotel';
import { SearchBar, Button } from 'react-native-elements';

import { HotelService } from "../services/hotel-service";

const HotelList = ({ navigation }) => {

  const hotelListinitial = [
    {
      "_id": "5e0e0e235e38323054d37f5b",
      "images": [
        "https://media-cdn.tripadvisor.com/media/photo-w/17/a6/43/01/ubicacion-estrategica.jpg"
      ],
      "name": "Radisson Bogota Metrotel",
      "stars": 4,
      "price": 5000,
      "address": "Cra 86 N 85a-63"
    },
    {
      "_id": "5e0e0e235e38323054d37f51",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "Habitel Hotel",
      "stars": 4,
      "price": 3000,
      "address": "Cra 86 N 85a-63"
    },
    {
      "_id": "5e0e0e235e38323054d37f52",
      "images": [
        "https://media-cdn.tripadvisor.com/media/photo-w/19/e5/38/51/exterior.jpg"
      ],
      "name": "Hilton Garden Inn Bogota Airport",
      "stars": 3,
      "price": 1000,
      "address": "Cra 86 N 85a-63"
    },
    {
      "_id": "5e0e0e235e38323054d37f53",
      "images": [
        "https://media-cdn.tripadvisor.com/media/photo-w/0a/f8/25/20/fachada.jpg"
      ],
      "name": "Hotel Vilar América",
      "stars": 4,
      "price": 25000,
      "address": "Cra 86 N 85a-63"
    },
    {
      "_id": "5e0e0e235e38323054d37f54",
      "images": [
        "https://media-cdn.tripadvisor.com/media/photo-w/11/f8/50/aa/hotel-charlies-place.jpg"
      ],
      "name": "Hotel Charlies Place",
      "stars": 2,
      "price": 11000,
      "address": "Cra 86 N 85a-63"
    },
    {
      "_id": "5e0e0e235e38323054d37f55",
      "images": [
        "https://media-cdn.tripadvisor.com/media/photo-o/16/d2/f2/63/lobby.jpg"
      ],
      "name": "Grand Hyatt Bogotá",
      "stars": 4,
      "price": 23000,
      "address": "Cra 86 N 85a-63"
    }
  ]

  const [search, setSearch] = useState('')
  const [hotelList, setHotelList] = useState([])

  useEffect(() => {
    getHotels()
  }, [])

  const getHotels = () => {
    HotelService.getAll().then(response => {
      if (!response) return
      setHotelList(response)
    }).catch(error => {
      console.log('No es posible conectarse al servidor');
      setHotelList(hotelListinitial)// En caso de error de red se setea informacion de prueba
    })
  }

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
          navigation={navigation}
          image={item.images[0]}
          address={item.address} />
      )
      )}
    </ScrollView>
  )
}

export default HotelList
