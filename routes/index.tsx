import { View, Text } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from '@/app/(tabs)';
import Home from "../ecrans/Home"

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    // <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            {/* <Stack.Screen name='Ngulu' component={Home}/> */}
        </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default Routes