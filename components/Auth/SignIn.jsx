import React from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, Button , TouchableOpacity} from 'react-native'
import { useTailwind } from 'tailwind-rn';


const SignIn = () => {
    const tailwind = useTailwind();
  return (
   <View style={tailwind('flex-1 w-screen bg-white justify-center items-center py-10')}>
    <Text style ={tailwind('text-3xl font-medium mb-2')}>Sign In</Text>
    <Text  style ={tailwind('text-lg font-loght')}>Enter info to sign in into your account </Text>
    <KeyboardAvoidingView style={tailwind('w-screen mt-8')}>
     <View contentContainerStyle={tailwind('px-6 py-8')}>
        <TextInput style={tailwind('w-80 bg-gray-300 py-5 px-4 rounded-xl')} placeholder='e.g johndoe@gmail.com'></TextInput>
                <TextInput style={tailwind('w-80 bg-gray-300 py-5 px-4 rounded-xl')} placeholder='e.g johndoe@gmail.com'></TextInput>

      {/* Form goes here */}
     </View>
     <TouchableOpacity style ={tailwind('text-white bg-red-500')}>
        <Text>Sign In</Text>
     </TouchableOpacity>
  </KeyboardAvoidingView>

   </View>
  )
}

export default SignIn