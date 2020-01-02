import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import ItemHotel from './item-hotel/item-hotel';
import { Button } from 'react-native-elements';

const HotelList = ({ navigation }) => {

  const hotelList = [
    {
      "_id": "5e0e0e235e38323054d37f5b",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "1",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f51",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "2",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f52",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f53",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f54",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f55",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f56",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f57",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f58",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f59",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f10",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f11",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f12",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f13",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "5",
      "price": 1000
    },
    {
      "_id": "5e0e0e235e38323054d37f14",
      "images": [
        "https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg"
      ],
      "name": "hotelEjemplo",
      "stars": "4",
      "price": 1000
    }
  ]

  return (
    <ScrollView>

      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('HotelDetail', { name: 'Jane' })}
      />

      {hotelList.map((item, i) => (
        <ItemHotel key={i}
          id={item._id}
          hotelName={item.name}
          price={item.price}
          stars={item.stars} />
      )
      )}
    </ScrollView>
  )
}



export default HotelList

