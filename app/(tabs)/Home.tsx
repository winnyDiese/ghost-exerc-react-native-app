import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View>
            <Text style={styles.text}>
                Home to tabs
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Molestiae ullam similique quia fuga tempore, officiis 
                veritatis porro dicta ea aperiam sit dolor quam tenetur, 
                harum suscipit dolores deleniti eveniet animi.
            </Text>
        </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  text:{
    color: 'black',
    fontSize: 22
  }
})