import { View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import React from 'react'
import dashboardStyles from './style';

const Home = () => {
  return (
    <ScrollView>
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>John Doe</Text>
        <Image 
          source={require('../../assets/images/icon.png')}
          style={dashboardStyles.userImage}
          />
      </View>
    </ScrollView>
  )
}

export default Home

