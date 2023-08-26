import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Checkbox from "expo-checkbox"
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import google1 from '../assets/icons/google.png'
import facebook1 from '../assets/icons/facebook.png'
import apple1 from '../assets/icons/apple.png'
import thrive from '../assets/images/obinrin.jpeg'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = async () => {
        if (email && password) {
            try{
                await createUserWithEmailAndPassword(auth, email, password);
            }catch(err){
                console.log('got error: ', err.messsage)
            }
        }
    }
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex">
        <View className="flex-row  justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-green-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={thrive} 
                style={{width: 55, height: 70}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-7"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            {/* <Text className="text-gray-700 ml-4">Full Name</Text> */}
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="Victoria Idunorba"
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={email}
                onChangeText={value=> setEmail(value)}
                placeholder='Enter Email'
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                value={password}
                onChangeText={value=> setPassword(value)}
                placeholder='Enter Password'
            />
            <TouchableOpacity
                className="py-3 bg-green-400 rounded-xl"
                onPress={()=> navigation.navigate('Home')}
            >
                <Text className="font-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={google1} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={apple1} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={facebook1} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-green-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}