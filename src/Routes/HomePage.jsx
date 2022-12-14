import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../Pages/Home"
import HabitPage from '../Pages/HabitPage'
import AppExplanation from '../Pages/Start/AppExplanation'


const Stack = createNativeStackNavigator()

export default function HomePage() {
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{
        headerShown:false,
    }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="HabitPage" component={HabitPage}/>
        <Stack.Screen name="AppExplanation" component={AppExplanation}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}