import {View,StyleSheet, Text, Image, TouchableOpacity} from'react-native'
import React, {useEffect, useContext, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { AuthContext } from '../Context/AuthContext'
import {Services} from '../Shared/Services'


export default function Login(){
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken,setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState();
    const {userData, setUserData} = useContext(AuthContext)
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '803589583137-eeev081hbc6424vfp9bms8441g5uei8f.apps.googleusercontent.com',
        expoClientId: '803589583137-b9mrihvs7smnppu1rrju1plrrjd5k957.apps.googleusercontent.com',
        iosClientId: '803589583137-eeev081hbc6424vfp9bms8441g5uei8f.apps.googleusercontent.com',
    });
    useEffect(()=>{
            if(response?.type=='success')
            {
                setAccessToken(response.authentication.accessToken);
                // console.log(response.authentication.accessToken);
                getUserData();
            }
    },[response]);

    const getUserData = async()=>{
        try {
            const resp = await fetch (
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
                }
            );

            const user = await resp.json();
            console.log("user Details",user)
            setUserInfo(user);
            setUserData(user);
            await Services.setUserAuth(user)
        } catch (error) {
            //add your own error handler here
        }
    }
    return (
        <View className=''>
            <Image className='justify-center' style={{width: 400, height: 260}} source={require('../assets/educationpopup.gif')}></Image>
            <View style={styles.container}>
            <Text style={styles.welcomeText} className='text-cyan-500 text-2xl font-bold text-center'
        >Welcome to Codeyforu</Text>
        <Text style={{textAlign: 'center', marginTop:70, fontSize: 20}}>Login/Signup</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>promptAsync()}
        >
        <Image className='w-[30px] h-[30px]' style={{marginRight: 10}} source={require('../assets/googleicon.png')}>

        </Image>
            <Text className='text-white'>
                Sign In with Google
            </Text>
        </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: -25,
        paddingTop: 40,
        backgroundColor: '#f5f5f5',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    button:{
        backgroundColor: '#0c7DE4',
        padding:10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})
