import React from "react";
import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import images from '../constants/images'
import icons from '../constants/icons'
import {login} from '../lib/appwrite'
import { useGlobalContext } from "../lib/global-provider";
import { Redirect } from "expo-router";


const SignIn = () =>{
    const {refetch, loading, isLogged}= useGlobalContext();
    if(!loading && isLogged) return <Redirect href="/" /> // back to home
    
    const handleLogin= async () => {
        const result= await login();

        if(result){
            refetch();
        } else{
            Alert.alert('Error,','Failed to login');
        }
    };
    return(
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full h-3/5" resizeMode="contain"/>
                <View className="px-10">
                <Text className="text-base text-center uppercase font-rubik text-black-200">Welcome To Real Scout</Text>
                <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2"> Let's Get You Closer to {"\n"}
                    <Text className="text-primary-300 text-2xl">Your Ideal Home</Text>
                     </Text>
                     <Text className="mt-9 text-center font-rubik-medium text-lg">
                        Login to ReState with Google
                     </Text>
                </View>
                <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 items-center">
                    <View className="flex flex-row items-center">
                    <Image
                    source={icons.google}
                    className="w-5 h-5"
                    resizeMode="contain"
                    />
                    <Text className="text-lg font-rubik-medium text-black-300 ml-2"> Continue with Google</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
    </SafeAreaView>
    )
}

export default SignIn
