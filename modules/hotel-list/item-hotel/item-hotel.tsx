import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card, Rating } from 'react-native-elements'

export const ItemHotel = ({ hotelName, price, stars, id }) => {

  const redirectToDetail = () => {
    console.log('redirect Detail ' + id);
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

          <View>
            <Text>{hotelName}</Text>
            <Rating
              ratingCount={5}
              readonly
              imageSize={20}
              startingValue={3}
            />
          </View>

          <View>
            <Text>Precio por noche</Text>
            <Text>COP $ {price}</Text>
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
  footer_card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  image_card: {
    flex: 1,
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
});

export default ItemHotel
