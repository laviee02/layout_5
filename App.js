// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5EA33A'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    width: 350,
    textAlign: 'center'
  },
  img: {
    width: 80,
    height: 80,
  }
})

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}>
        <View style={styles.slide}>
          <Image style={styles.img}
            source={require('./mobile_img/icons8-restaurant-menu-101.png')}
          />
          <Text style={styles.text}>Browser Food</Text>
          <Text style={styles.text1}>Welcome to our restaurant app! Log in
            and check  out our delicious food.</Text>
        </View>
        <View style={styles.slide}>
          <Image style={styles.img}
            source={require('./mobile_img/icons8-delivery-500.png')}
          />
          <Text style={styles.text}>Order Food</Text>
          <Text style={styles.text1}>Hungry? Order food in just a few clicks
            and we’ll take care of you..</Text>
        </View>
        <View style={styles.slide}>
          <Image style={styles.img}
            source={require('./mobile_img/noun_Calendar_2442157.png')}
          />
          <Text style={styles.text}>Make Reservations</Text>
          <Text style={styles.text1}>Book a table in advance to avoid
            waiting in line</Text>
        </View>
        <View style={styles.slide}>
          <Image style={styles.img}
            source={require('./mobile_img/noun_Binoculars_1107295.png')}
          />
          <Text style={styles.text}>Quick Search</Text>
          <Text style={styles.text1}>Quickly find food items you like
            the most</Text>
        </View>
        <View style={styles.slide}>
          <Image style={styles.img}
            source={require('./mobile_img/noun_mac_2076879.png')}
          />
          <Text style={styles.text}>Apple Pay</Text>
          <Text style={styles.text1}>We know you’re busy, so you can pay
            with your phone in just one click</Text>
        </View>
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)