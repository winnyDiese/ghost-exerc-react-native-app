import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import React from 'react'
import dashboardStyles from './style';

const Home = () => {
  return (
    <ScrollView>
      {/*Debut du Header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>John Doe</Text>
        <Image 
          source={require('../../assets/images/icon.png')}
          style={dashboardStyles.userImage}
        />
      </View>
      {/* Fin du header */}



      {/* Listes des activités */}
      <FlatList 
        horizontal={true} 
      />




    </ScrollView>
  )
}

export default Home

