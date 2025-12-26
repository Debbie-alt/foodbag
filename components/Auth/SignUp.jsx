import React from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, Button , TouchableOpacity, Image} from 'react-native'
import { useTailwind } from 'tailwind-rn';

const google = require('../../assets/google.png')
const apple = require('../../assets/apple.png')
const facebook = require('../../assets/facebook.png')


const SignUp = () => {
    const tailwind = useTailwind();
  return (
   <View style={tailwind('flex-1 w-screen bg-white justify-center items-center py-10')}>
    <Text style ={tailwind('text-3xl font-medium mb-2')}>Sign In</Text>
    <Text  style ={tailwind('text-lg font-light')}>Enter info to sign in into your account </Text>
    <KeyboardAvoidingView style={tailwind('w-[84%] mt-8 ')}>
     <View contentContainerStyle={tailwind('px-6 py-8 bg-red-500')}>
        <Text style={tailwind('text-gray-700 mb-2 text-lg mx-2')}>Email</Text>

        <TextInput style={tailwind('  bg-stone-100 py-5 px-4 mb-7 rounded-xl text-lg')} placeholder='e.g johndoe@gmail.com'></TextInput>
        <Text style={tailwind('text-gray-700 mb-2 text-lg mx-2')}>Password</Text>
        <TextInput textContentType='password' style={tailwind(' bg-stone-100 py-5 px-4 text-lg rounded-xl')} placeholder='************'></TextInput>
       
        <Text style={tailwind('text-gray-700 mb-2 text-lg mx-2')}>Confirm Password</Text>
        <TextInput textContentType='password' style={tailwind()}/>

     </View>
     <TouchableOpacity style ={tailwind('text-white rounded-full bg-red-500 text-center items-center  py-4 mt-4')}>
        <Text style = {tailwind('text-white text-lg')}>Sign Up</Text>
     </TouchableOpacity>
  </KeyboardAvoidingView>

<View style={tailwind('flex w-full p-8 mt-7 flex-row items-center justify-center')}>
  <View style={tailwind('h-[2px] w-1/3 bg-gray-400')}/>
  <Text style={tailwind('mx-4 text-lg')}>Or Sign Up with</Text>
  <View style={tailwind('h-[2px] w-1/3 bg-gray-400')}/>
</View>

<View style={tailwind('flex flex-row justify-center w-3/4 mb-10 ')}>
  <TouchableOpacity style={tailwind('bg-stone-200 rounded-lg p-3 ')}>
     <Image source={google} style={tailwind('h-30 w-30')}/>
  </TouchableOpacity>

    <TouchableOpacity style={tailwind('bg-stone-200 rounded-lg p-3 mx-7')}>
     <Image source={apple} style={tailwind('h-30 w-30')}/>
  </TouchableOpacity>

    <TouchableOpacity style={tailwind('bg-stone-200 rounded-lg px-4 py-4')}>
     <Image source={facebook} style={tailwind('h-50 w-50')} />
  </TouchableOpacity>
</View>

  

</View>
  )
}

export default SignUp