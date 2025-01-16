import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'
import Home from '../Home'

const Tab = createBottomTabNavigator()

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
      >

      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default BootomTabs
