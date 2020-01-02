import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import { Button, Card, Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const HotelList = () => {

  return (
    <View>
      <Text>Lista de hoteles</Text>
      <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        iconRight
        title="Button with right icon"
      />

      <Card>


        {/* <Text >Santiago</Text> */}
        <Image
          source={{ uri: 'https://www.ghlhoteles.com/cache/a6/5f/a65f8bc24a15bd60e379ad8b1a308be8.jpg', width: 100, height: 20 }}
        />
        <View style={Styles.footer_card}>

          <View>
            <Text>Hotel Portobelo</Text>
            <Rating
              ratingCount={5}
              readonly
              imageSize={20}
              startingValue={4}
            />
          </View>

          <View>
            <Text>Precio por noche</Text>
            <Text>COP $ 425.000</Text>
          </View>

        </View>


      </Card>


    </View>
  )
}

const Styles = StyleSheet.create({
  footer_card: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default HotelList

