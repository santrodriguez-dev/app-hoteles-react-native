import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card, Rating } from 'react-native-elements'

export const ItemHotel = ({ hotelName = 'Sin nombre', price, stars, id, navigation }) => {

  const redirectToDetail = () => {
    navigation.navigate('HotelDetail', {
      hotelName,
      price,
      stars
    });
  }

  return (
    <View onTouchEnd={redirectToDetail}>
      <Card containerStyle={Styles.card}>
        {/* <Text >Santiago</Text> */}
        <Image
          source={{ uri: 'https://www.ghlhoteles.com/cache/a6/5f/a65f8bc24a15bd60e379ad8b1a308be8.jpg' }}
          style={Styles.image_card}
        />
        <View style={Styles.footer_card}>

          <View style={{ ...Styles.footer_line, marginBottom: 1 }}>
            <Text style={Styles.footer_title}>{hotelName}</Text>
            <Text>Precio por noche</Text>
          </View>

          <View style={Styles.footer_line}>
            <Rating
              ratingCount={5}
              readonly
              imageSize={20}
              startingValue={stars}
            />
            <Text style={Styles.footer_price}>COP $ {price}</Text>
          </View>
        </View>

      </Card>
    </View>
  )
}

const Styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden'
  },
  image_card: {
    flex: 1,
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  footer_card: {
    padding: 12,
  },
  footer_line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer_title: {
    fontWeight: 'bold',
    fontSize: 20,
    maxWidth: 200,
  },
  footer_price: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffc301',
  }
});

export default ItemHotel
