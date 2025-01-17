import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the dashboard...</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'yellow'
  },
  text:{
    color: 'black',
    fontSize: 22
  }
})