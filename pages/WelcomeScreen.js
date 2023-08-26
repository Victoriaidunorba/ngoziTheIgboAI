import {View,StyleSheet, Text, Image, TouchableOpacity} from'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import thrive from '../assets/images/amaka.gif'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: "#ffff", flex:"1 1 0%"}}>
        <View className="flex-1 space-y-2 flex justify-around my-4">
            <Text 
                className="text-gray-600 font-bold text-4xl text-center">
                Ngozi
            </Text>
            <Text className='text-center tracking-wider text-gray-600 font-semibold'>
            Ọdịnihu abịala,<Text className='font-extrabold text-base text-green-400'>ọgụgụ isi adịgboroja.</Text> 
            </Text>
            <View className="flex-row justify-center">
                <Image source={thrive}
                    style={{width: 250, height:250}} />
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 bg-green-500 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Get Started
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-gray-600 font-semibold">Already have an account?</Text>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate('Login')}
                    >
                        <Text className="font-semibold text-green-400"> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

