import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import thrive from '../assets/images/chatgbt.png'
import thrive2 from '../assets/images/chatgpt.png'
import thrive3 from '../assets/images/robot.png'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function FeatureScreen() {
  return (
    <ScrollView style={{height: hp(60)}} bounces={false} showsVerticalScrollIndicator={false} className="space-y-4">
        <Text style={{fontSize: wp(3.5)}} className="font-semibold text-center justify-center text-gray-400">Nke a bu Ngozi, Your Igbo AI bot</Text>
        <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image className="rounded-ful" source={thrive2} style={{height: hp(4), width: hp(4)}} />
                <Text style={{fontSize: wp(4.6)}} className="font-semibold text-gray-700">ChatGPT</Text>
            </View>
            
            <Text style={{fontSize: wp(3.3)}} className="text-gray-700 font-medium">
                ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
            </Text>
        </View>
        <View className="bg-purple-200 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image className="rounded-ful" source={thrive} style={{height: hp(4), width: hp(4)}} />
                <Text style={{fontSize: wp(4.6)}} className="font-semibold text-gray-700">DALL-E</Text>
            </View>
            
            <Text style={{fontSize: wp(3.3)}} className="text-gray-700 font-medium">
                DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.
            </Text>
        </View>
        <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image className="rounded-ful" source={thrive3} style={{height: hp(4), width: hp(4)}} />
                <Text style={{fontSize: wp(4.6)}} className="font-semibold text-gray-700">Smart AI</Text>
            </View>
            
            <Text style={{fontSize: wp(3.3)}} className="text-gray-700 font-medium">
                A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.
            </Text>
        </View>
    </ScrollView>
  )
}