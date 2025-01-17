import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'
import Home from '../Home'

// const Tab = createBottomTabNavigator()
const Tab = createMaterialTabNavigator()

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
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name='home' color={color} size={size} />
          }
        }}
      />

      <Tab.Screen
        name='Profile'
        component={Home}
        options={{
          tabBarLabel: 'Paramettre',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name='setting' color={color} size={size} />
          }
        }}
      />
      
      <Tab.Screen
        name='NOtification'
        component={Home}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name='caht' color={color} size={size} />
          },
          tabBarBadge: 1
        }}
      />

    </Tab.Navigator>
  )
}

export default BootomTabs
