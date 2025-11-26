import React from 'react'
import { View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native/types_generated/index';
import { useTailwind } from 'tailwind-rn'

const SignIn = () => {
    const tailwind = useTailwind();
  return (
   <View style={tailwind('flex-1  bg-white justify-center py-10')}>
    <KeyboardAvoidingView>
     <View contentContainerStyle={tailwind('px-6 py-8')}>
      {/* Form goes here */}
     </View>
  </KeyboardAvoidingView>

   </View>
  )
}

export default SignIn