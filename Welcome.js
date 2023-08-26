import { View, Text, TouchableOpacity,Image, Button, ScrollView } from 'react-native'
import React, {useContext, useRef, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import {AuthContext} from '../Context/AuthContext'
import FeatureScreen from './FeatureScreen'
import Amaka from '../assets/images/amaka.gif'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {dummyMessages} from '../constants'
import VoiceLoading from '../assets/images/voiceLoading.gif'
import RecordingIcon from '../assets/images/recordingIcon.png'
import LoadingIcon from '../assets/images/loading.gif'
import { WelcomeHeader } from '../pages/WelcomeHeader'
export default function HomeScreen() {

  const [messages, setMessages] = useState(dummyMessages);
  
  const [result, setResult] = useState('');
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(true);
  const scrollViewRef = useRef();
  const handleLogout = async ()=>{
    await signOut(auth);
  }
  const clear = ()=>{
    setMessages([]);
  }
  const stopSpeaking =()=>{
    setSpeaking(false)
  }
  return (
    <View className="flex-1 bg-white">
      <WelcomeHeader/>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView className="flex-1 flex mx-5">
        {/* bot icon */}
        <View className="flex-row justify-center">
          <Image  
              source={Amaka}
              style={{height: hp(15), width: hp(15)}}
          />
        </View>
        
        {/* features || message history */}
        {
          messages.length>0? (
            <View className="space-y-2 flex-1">
              <Text className="text-gray-700 font-semibold ml-1" style={{fontSize: wp(5)}}>Assistant</Text>
        
              <View 
                style={{height: hp(58)}} 
                className="bg-neutral-200 rounded-3xl p-4">
                  <ScrollView  
                    ref={scrollViewRef} 
                    bounces={false} 
                    className="space-y-4" 
                    showsVerticalScrollIndicator={false}
                  >
                    {
                      messages.map((message, index)=>{
                        if(message.role=='assistant'){
                          if(message.content.includes('https')){
                            // result is an ai image
                            return (
                              <View key={index} className="flex-row justify-start">
                                <View 
                                  className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                                    <Image  
                                      source={{uri: message.content}} 
                                      className="rounded-2xl"  
                                      resizeMode="contain" 
                                      style={{height: wp(60), width: wp(60)}} 
                                    />
                                </View>
                              </View>
                              
                              
                            )
                          }else{
                            // chat gpt response
                            return (
                              <View 
                                key={index} style={{width: wp(70)}} 
                                className="bg-emerald-100 p-2 rounded-xl rounded-tl-none">
                                <Text className="text-neutral-800" style={{fontSize: wp(4)}}  >
                                  {message.content}
                                </Text>
                              </View>
                            )
                          }
                        }else{
                          // user input text
                          return (
                            <View key={index} className="flex-row justify-end">
                              <View 
                                style={{width: wp(70)}} 
                                className="bg-white p-2 rounded-xl rounded-tr-none">
                                <Text style={{fontSize: wp(4)}}  >
                                  {message.content}
                                </Text>
                              </View>
                            </View>
                          );
                        }
                        
                        
                      })
                    }
                  </ScrollView>
              </View>
            </View>
          ): (
              <FeatureScreen />
          )
        }
        
        
        {/* recording, clear and stop buttons */}
        <View className="flex justify-center items-center">
          {
            loading? (
              <Image 
                source={LoadingIcon}
                style={{width: hp(10), height: hp(10)}}
              />
            ):
              recording ? (
                <TouchableOpacity onPress={startR} className="space-y-2">
                  {/* recording stop button */}
                  <Image 
                    className="rounded-full" 
                    source={VoiceLoading}
                    style={{width: hp(10), height: hp(10)}}
                  />
                </TouchableOpacity>
                
              ) : (
                <TouchableOpacity>
                  {/* recording start button */}
                  <Image 
                    className="rounded-full" 
                    source={RecordingIcon}
                    style={{width: hp(10), height: hp(10)}}
                  />
                </TouchableOpacity>
              )
          }
          {
            messages.length>0 && (
              <TouchableOpacity 
              onPress={clear} 
                className="bg-neutral-400 rounded-3xl p-2 absolute right-10"
              >
                <Text className="text-white font-semibold">Clear</Text>
              </TouchableOpacity>
            )
          }
          {
             speaking && (
              <TouchableOpacity 
              onPress={stopSpeaking} 
                className="bg-red-400 rounded-3xl p-2 absolute left-10"
              >
                <Text className="text-white font-semibold">Stop</Text>
              </TouchableOpacity>
            )
          }
            
            
          
        </View>
        
      </SafeAreaView>
    </View>
  )
}