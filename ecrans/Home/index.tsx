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
import dashboardStyles from './style';
import { fakeActivity } from '@/fakeData/fakeActivity'
import ActivityItem from '@/composants/ActivityItems'
import { fakeSymptome } from '@/fakeData/fakeSymptome'
import SymptomeItem from '@/composants/SymptomeItem'
import { fakeDoctor } from '@/fakeData/fakeDoctor'
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
      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>Quel symptome avez vous ?</Text>
      </View>

      <FlatList
        data={fakeSymptome}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        horizontal={true}
        renderItem={({ item }) => {
          return <SymptomeItem item={item} />
        }}
      />


      {/* Docteur Liste */}
      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}>No docteur</Text>
        <Text style={dashboardStyles.link}>Tout afficher</Text>
      </View>

      <View>
        {fakeDoctor.map((doctor, index)=>{
          return (
            <TouchableOpacity key={doctor.id} style={dashboardStyles.doctorCard}>
              <Text>{doctor.fullname}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

        
    </ScrollView>
  )
}

export default Home
