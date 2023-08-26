import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../pages/HomeScreen';
import WelcomeScreen from '../../pages/WelcomeScreen';
import LoginScreen from '../../pages/LoginScreen';
import SignUpScreen from '../../pages/SignUpScreen';
import useAuth from '../../hooks/useAuth'

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
    const { user } = useAuth();
    if (user) {
        return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          )
    }else{
        return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
                <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          )
    }
  
}