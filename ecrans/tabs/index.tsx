import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createMaterialTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'
import Home from '../Home'
import Messages from '../Message'
import Settings from '../Setting'

const Tab = createBottomTabNavigator()
// const Tab = createMaterialTabNavigator()

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
        name='Notification'
        component={Messages}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name='chat' color={color} size={size} />
          },
          tabBarBadge: 1
        }}
      />

      <Tab.Screen
        name='Paramettre'
        component={Settings}
        options={{
          tabBarLabel: 'Paramettre',
          tabBarIcon: ({color, size}) => {
            <MaterialCommunityIcons name='setting' color={color} size={size} />
          }
        }}
      />
      
      

    </Tab.Navigator>
  )
}

export default BootomTabs
