import { View, Text, TouchableOpacity, SafeAreaViewBase, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';
const checkmeal1 = require('../../assets/checkmeal1.jpg')
const checkmeal2 = require('../../assets/checkmeal2.jpg')
import { useEffect } from 'react';


const CheckMeals = () => {
  const navigation = useNavigation();
  const tailwind = useTailwind();
  useEffect(() => {
  setTimeout(() => {
  navigation.navigate('CalorieIntake');
  },6000);
}, [navigation]);

  return (
    <View style={tailwind('flex-1')}>

      <View style={tailwind('bg-red-500 h-1/2 w-full rounded-bl-full justify-end py-10 items-center')}>
        <View
        style={tailwind('flex flex-row items-center mb-12')}>
          <Image source={checkmeal1} style={ [ tailwind('mx-2 rounded-xl border-4 border-white'), { width: 140, height: 140 }  ]} />
          <Image source={checkmeal2} style={ [ tailwind('mx-2 rounded-xl border-4 border-white'), { width: 140, height: 140 }  ]} />

        </View>

        <View style={tailwind('flex flex-row items-center')}>
          <TouchableOpacity
            style={tailwind('bg-white px-2 py-2 rounded-full ')}
          />
          <TouchableOpacity
            style={tailwind('bg-white px-1.5 py-1.5 rounded-full mx-4')}
            onPress={() => navigation.navigate('CalorieIntake')}
          />
          <TouchableOpacity
            style={tailwind('bg-white px-1.5 py-1.5 rounded-full')}
            onPress={() => navigation.navigate('Home')}
          />
        </View>

      </View>

      <View style={tailwind('h-1/2 w-full items-center px-6')}>

        <Text style={tailwind('text-2xl font-medium mb-2 py-10 text-black')}>
          Check for your meals
        </Text>

        <Text style={tailwind('text-center text-black text-lg mb-6')}>
          Explore fresh and wholesome meals options made just for you. Healthy eating doesn’t
          have to be complicated. We keep it simple and satisfying.
        </Text>

        <View style={tailwind('flex flex-row items-center justify-center w-full')}>

          
                          <TouchableOpacity
                            style={tailwind('px-14 py-3 bg-[#FFFCF0] shadow-md rounded-full')}
                            onPress={() => navigation.navigate('Home')}
                          >
                            <Text style={tailwind('text-red-500 text-lg font-medium text-center')}>Skip</Text>
                          </TouchableOpacity>
                
                          <TouchableOpacity
                            style={tailwind('bg-red-500 px-14 py-3 rounded-full mx-4')}
                            onPress={() => navigation.navigate('Home')}
                          >
                            <Text style={tailwind('text-white text-lg font-medium text-center')}>Next</Text>
                          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

export default CheckMeals;
