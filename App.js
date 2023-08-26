
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useState, useEffect } from 'react'
import { AuthContext } from './Context/AuthContext'

import AppNavigation from './assets/navigation/AppNavigation'
import Services from './Shared/Services'
import WelcomeScreen from './pages/WelcomeScreen';
import SignUpScreen from './pages/SignUpScreen';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
 
export default function App() {
  const Stack = createNativeStackNavigator();

  const [userData, setUserData] = useState();
  useEffect(()=>{
    Services.getUserAuth().then(resp=>{
      console.log(resp); 
      if(resp)
      {
        setUserData(resp)
      }
      else{
        setUserData(null)
      }
    })
  },[])

  
  return (
    
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Welcome'
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
   </NavigationContainer>
    
  
  );
}


