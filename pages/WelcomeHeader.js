import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../Context/AuthContext'
import woman from '../assets/images/avatar.jpeg'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import {Services} from '../Shared/Services'

export default function WelcomeHeader() {
  const {userData, setUserData}=useContext(AuthContext)
  const handleLogout = async ()=>{
    await signOut(auth);
  }
  return (
    <SafeAreaView className='flex flex-row bg-white justify-between items-center'>
        <View>
            <Text>Ehihie ọma,</Text>
            <Text style={{fontSize:20}} className='text-green-500 font-extrabold' >Ndidi Amaka</Text>
        </View>
        <TouchableOpacity
      onPress={()=>{handleLogout();setUserData(null)}} className='p-1 rounded-lg'>
        <Image source={woman} 
        style={{width:40,height:40,borderRadius:100}}
        />
      </TouchableOpacity>
        
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection: 'row'
    }
})