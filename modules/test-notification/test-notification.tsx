import React, { Fragment, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Platform, Alert } from 'react-native'
import { Button } from 'react-native-elements'; 3

import { WebView } from 'react-native-webview';

import OneSignal from 'react-native-onesignal'

const TestNotification = ({ navigation }) => {

  const [iframeUrl, setiframeUrl] = useState('https://bitest.digitalwaresaas.com.co:9595/portalv2/#/')

  useEffect(() => {
    setiframeUrl('https://bitest.digitalwaresaas.com.co:9595/portalv2/#/')

    connectOneSignal()

    return () => {
      removeEventListeners()
    };
  }, [])

  const connectOneSignal = () => {
    console.log(OneSignal);
    OneSignal.init("96c27069-23d2-44f6-8dfd-ebfdaf3b52aa", { kOSSettingsKeyAutoPrompt: true });
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
  }

  const removeEventListeners = () => {
    OneSignal.removeEventListener('received', onReceived);
    OneSignal.removeEventListener('opened', onOpened);
    OneSignal.removeEventListener('ids', onIds);
  }

  const onReceived = (notification) => {
    console.log("Notification received: ", notification);
  }

  // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

  const onOpened = (openResult) => {
    console.log(openResult);

    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  const onIds = (device) => {
    console.log('Device info: ', device);
  }

  const redirectToDetail = () => {
    setiframeUrl('https://docs.expo.io/versions/latest/get-started/installation')
    navigation.navigate('HotelList');
  }

  const showAlert = (e) => {
    return
    console.log(e);
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }

  return (
    <Fragment>

      <Button
        title="Lista de hoteles"
        onPress={redirectToDetail}
      />

      <WebView
        originWhitelist={['*']}
        source={{ uri: iframeUrl }}
        style={{ marginTop: 0 }}
        onLoad={showAlert}
        onMessage={(e) => showAlert(e)}
      />
    </Fragment>


  )


}


export default TestNotification
