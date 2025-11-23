import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CheckMeals = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#F50316' }}>
      <Text className='text-white'>CheckMeals Page</Text>
      <Button title='Go Back' onPress={() => navigation.goBack()}></Button>
    </View>
  )
}

export default CheckMeals