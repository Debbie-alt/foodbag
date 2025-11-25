import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useTailwind from 'tailwind-rn/dist/use-tailwind';

const CheckMeals = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#F50316' }}>
      <Text style={tailwind('text-white text-xl')} >CheckMeals Page</Text>
      {/* <Button title='Go Back' onPress={() => navigation.goBack()}></Button> */}
    </View>
  )
}

export default CheckMeals