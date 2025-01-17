import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTabNavigator } from ""
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'
import Home from '../Home'

// const Tab = createBottomTabNavigator()
const Tab = createMaterialTabNavigator

const BootomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63"
      }}
    >
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name='home' color={color} size={size} />
          }
        }}
      />

      <Tab.Screen
        name='Profile'
        component={Home}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name='account' color={color} size={size} />
          }
        }}
      />
      
      <Tab.Screen
        name='NOtification'
        component={Home}
        options={{
          tabBarLabel: 'Update',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name='bell' color={color} size={size} />
          }
        }}
      />

    </Tab.Navigator>
  )
}

export default BootomTabs
