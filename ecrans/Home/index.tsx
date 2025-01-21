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
          return (
            <TouchableOpacity style={dashboardStyles.scrollableListItem}>
              {/* <SVG_ICON width={50} height={50} /> */}
              <Text style={dashboardStyles.mainText}>{item.mainText}</Text>
              <Text style={dashboardStyles.subText}>{item.subText}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </ScrollView>
  )
}

export default Home
