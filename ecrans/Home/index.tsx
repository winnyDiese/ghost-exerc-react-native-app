import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import dashboardStyles from './style'
import { fakeActivity } from '@/fakeData/fakeActivity'
import ActivityItem from '@/composants/ActivityItems'
// import SVG_ICON from "../../assets/images/svg/new_year.svg"



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
        data={fakeActivity}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        horizontal={true}
        renderItem={({ item }) => {
          return <ActivityItem item={item} />
        }}
      />


      {/* Liste des symptomes */}
      <View>
        <Text style={{color:'white'}}>Quel symptome avez vous ?</Text>
      </View>

      <FlatList
        data={fakeActivity}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        horizontal={true}
        renderItem={({ item }) => {
          return <ActivityItem item={item} />
        }}
      />

    </ScrollView>
  )
}

export default Home
