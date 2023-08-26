import { View, Text, Button, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect,  useRef, useContext } from 'react'
import Checkbox from "expo-checkbox"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import woman from '../assets/images/avatar.jpeg'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import Amaka from '../assets/images/amaka.gif'
import {dummyMessages} from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { signOut } from 'firebase/auth'
import FeatureScreen from './FeatureScreen'
import { Audio } from 'expo-av';
import VoiceLoading from '../assets/images/voiceLoading.gif'
import RecordingIcon from '../assets/images/recordingIcon.png'
import LoadingIcon from '../assets/images/loading.gif'




// subscribe for more videos like this :)


export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();
  
  const [speaking, setSpeaking] = useState(true);
  const [recording, setRecording] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // const [isVoiceAvailable, setIsVoiceAvailable] = useState(false);
  // const [permission, askForPermission] = usePermissions(Permissions.AUDIO_RECORDING, { ask: true })

    const handleLogout = async ()=>{
      await signOut(auth);
    }
    const stopSpeaking =()=>{
      setSpeaking(false)
    }
    const clear = ()=>{
      setMessages([]);
    }

   


    const handleSubmit = async () => {
        if (email && password) {
            try{
                await createUserWithEmailAndPassword(auth, email, password);
            }catch(err){
                console.log('got error: ', err.messsage)
            }
        }
    }
  //   useEffect(() => {
  //     console.log('loading...')
  //     Voice.onSpeechEnd = onSpeechEnd
  //     Voice.onSpeechResults = onSpeechResults
  //     Voice.onSpeechError = onSpeechError
  //     Voice.onSpeechPartialResults = onSpeechPartialResults
  //     Voice.onSpeechVolumeChanged = onSpeechVolumeChanged
  //     Voice.onSpeechStart = onSpeechStartHandler;
  //     Voice.onSpeechEnd = onSpeechEndHandler;
  //     Voice.onSpeechResults = onSpeechResultsHandler;
  //     Voice.onSpeechError = onSpeechErrorHandler;
     
  //     return () => {
  //         Voice.destroy().then(Voice.removeAllListeners).catch(() => console.log('ERROR Destroy'))
  //         console.log('destroyed')
  //     }
  // }, [])

//   async function startRecording() {
//     setRecording(true);
//     try {
//       await Voice.start('en-GB'); // en-US
//       console.log('Requesting permissions..');
//       await Audio.requestPermissionsAsync();
//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true,
//       });

//       console.log('Starting recording..');
//       const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
//       );
//       setRecording(recording);
//       console.log('Recording started');
//     } catch (err) {
//       console.error('Failed to start recording', err);
//     }
//   }

//   async function stopRecording() {
//     console.log('Stopping recording..');
//     setRecording(undefined);
//     await recording.stopAndUnloadAsync();
//     await Audio.setAudioModeAsync(
//       {
//         allowsRecordingIOS: false,
//       }
//     );
//     const uri = recording.getURI();
//     console.log('Recording stopped and stored at', uri);
//   }

  
//   // Voice.isAvailable().then(() => setIsVoiceAvailable(true)).catch((e) => { console.log('ERROR isAvailable') })

//   const startRecognition = () => {
//       console.log('startRecognition')
//       Voice.onSpeechEnd = onSpeechEnd
//       Voice.onSpeechResults = onSpeechResults
//       Voice.onSpeechError = onSpeechError
//       Voice.onSpeechPartialResults = onSpeechPartialResults
//       Voice.onSpeechVolumeChanged = onSpeechVolumeChanged
//       Voice.onSpeechStart = onSpeechStartHandler;
//       Voice.onSpeechEnd = onSpeechEndHandler;
//       Voice.onSpeechResults = onSpeechResultsHandler;
//       Voice.onSpeechError = onSpeechErrorHandler;
//       Voice.start('cs-CZ').catch((e) => console.log('ERROR start: ' + e))
//       int(true)
//   }

//   const stopRecognition = () => {
//       Voice.stop()
//       int(false)
//       setIsRecognizing(false)
//   }

//      const onSpeechVolumeChanged = (event) => {
//       console.log(event.value)
//   }
//   const onSpeechStartHandler = e => {
//     console.log(event.value)
// }
// const onSpeechEndHandler = e => {
//   setRecording(false);
//   console.log('speech stop event', e);
// };
// const onSpeechResultsHandler = e => {
//   console.log('speech event: ',e);
//   const text = e.value[0];
//   setResult(text);
  
// };
// const onSpeechErrorHandler = e=>{
//   console.log('speech error: ',e);
// }


//   const onSpeechResults = e=> {
//       console.log('onSpeechResults: ' + event.value)
//   }

//   const onSpeechPartialResults = e=> {
//       console.log('onSpeechPartialResults')
//       if (event.value) {
//           setSpeachResult(event.value)
//       }
//   }

//   const onSpeechEnd = e=> {
//       console.log('onSpeechEnd')
//   }

//   const onSpeechError = e=> {
//       console.log('onSpeechError' + event.error?.message)
//   }

//   console.log('I have rendered')
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className='flex flex-row bg-white justify-between items-center'>
          <View className='p-2'>
          <Text>Ehihie ọma,</Text>
          <Text style={{fontSize:20}} className='text-green-500 font-extrabold' >Idunorba Victoria</Text>
          </View>
          <TouchableOpacity
      // onPress={()=>{handleLogout();setUserData(null)}} 
      onPress={()=> navigation.navigate('Welcome')}
      className='p-1 rounded-lg'>
        <Image source={woman} 
        style={{width:40,height:40,borderRadius:100}}
        />
      </TouchableOpacity>
      </View>

      <SafeAreaView className="flex-1 flex mx-5">
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

        {/* recording clear and stop buttons */}
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
      
    
    </SafeAreaView>
  )
}