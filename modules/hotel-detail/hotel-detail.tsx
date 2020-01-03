import React, { PureComponent, useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { Card, Rating } from 'react-native-elements'
import { Icon } from 'react-native-elements'

const HotelDetail = (props) => {

  const { navigation } = props

  const [hotelData, setHotelData] = useState({
    "hotelName": null,
    "price": null,
    "stars": null,
  })

  useEffect(() => {
    console.log(props);
    setHotelData(navigation.state.params)
  }, [])

  return (
    <ScrollView>
      <Card containerStyle={Styles.card}>
        <View style={Styles.header_card}>
          <Text style={Styles.header_title}>{hotelData.hotelName}</Text>
          <Rating
            ratingCount={5}
            readonly
            imageSize={30}
            startingValue={hotelData.stars}
            style={{ marginBottom: 5 }}
          />
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              size={30}
              name='map-marker'
              type='font-awesome'
              color='gray'
              style={{ marginHorizontal: 50 }}
            />
            <Text style={{ fontSize: 18, marginLeft: 20 }}>{'Cra 86 N75a-85'}</Text>
          </View>
        </View>

        <View style={{ height: 170 }}>
          <Image
            source={{ uri: 'https://www.ghlhoteles.com/cache/a6/5f/a65f8bc24a15bd60e379ad8b1a308be8.jpg' }}
            style={Styles.image_card}
          />
        </View>
      </Card>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden'
  },
  header_card: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 12,
  },
  header_title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 5
  },
  rating: {
    alignItems: 'flex-start'
  },
  image_card: {
    flex: 1,
    width: '100%'
  },
});

export default HotelDetail
