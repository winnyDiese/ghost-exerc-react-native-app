import { View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import React from 'react'
import "./style.css"

const Home = () => {
  return (
    <ScrollView>
      <View >
        <Text style={{color: 'white'}}>John Doe</Text>
        <Image source={require('../../assets/images/djadja.PNG')} />
      </View>
    </ScrollView>
  )
}

export default Home

