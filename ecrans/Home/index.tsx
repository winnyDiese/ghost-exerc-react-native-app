import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import React from 'react'
import dashboardStyles from './style';
import { fakeActivity } from '@/fakeData/fakeActivity';

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
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        horizontal={true} 
        renderItem={({item})=>{
          return(
          <View>
            <Text style={dashboardStyles.scrollableListItem}>{item.mainText}</Text>
            <Text>{item.subText}</Text>
          </View>
          )
        }}
      />




    </ScrollView>
  )
}

export default Home

