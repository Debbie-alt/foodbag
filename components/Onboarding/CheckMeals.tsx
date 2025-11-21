import React from 'react'
import { Button, View, SafeAreaViewBase, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const CheckMeals = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaViewBase className='flex-1'>
    <View className='bg-red-500 h-1/2 w-full'>


      <Button title="" onPress={() => alert('Button Pressed!')} />

    </View>
    <View className='bg-white h-1/2 w-full justify-center items-center py-7 text-black '>
        <Text className='text-2xl font-medium mb-4'>Check for your meals</Text>
        <Text className='text-center w-2/3'>Explore fresh and wholesome meals options
          made just for you . Healthy eating doesn’t 
          have to be complicated - we keep it
          simple and satisfying</Text>
        <Button title="Next" onPress={() => navigation.navigate('Home' as never)} />
        <Button title="Skip" onPress={() => navigation.navigate('Home' as never)} />


    </View>
    </SafeAreaViewBase>
  )
}

export default CheckMeals