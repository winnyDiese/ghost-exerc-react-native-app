import { View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import React from 'react'
import "./style.css"
import dashboardStyles from './style'

const Home = () => {
  return (
    <ScrollView>
      <View style={dashboardStyles.header}>
        <Text style={{color: 'white'}}>John Doe</Text>
        <Image source={require('../../assets/images/djadja.PNG')} />
      </View>
    </ScrollView>
  )
}

export default Home

