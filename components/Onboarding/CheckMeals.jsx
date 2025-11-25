import { View, Text, TouchableOpacity, SafeAreaViewBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';
const CheckMeals = () => {
const navigation = useNavigation();
const tailwind = useTailwind(); 

return (
<SafeAreaViewBase style={tailwind('flex-1 bg-white')}>
<View style={tailwind('bg-red-500 h-1/2 w-full justify-center items-center')}>
<TouchableOpacity
style={tailwind('bg-white px-6 py-3 rounded')}
onPress={() => alert('Button Pressed!')}
>
<Text style={tailwind('text-red-500 font-bold')}>Press Me</Text> </TouchableOpacity> </View>

  <View style={tailwind('h-1/2 w-full justify-center items-center px-6')}>
    <Text style={tailwind('text-2xl font-medium mb-4 text-black')}>
      Check for your meals
    </Text>
    <Text style={tailwind('text-center text-black mb-6')}>
      Explore fresh and wholesome meals options made just for you. Healthy eating doesn’t 
      have to be complicated - we keep it simple and satisfying.
    </Text>

    <TouchableOpacity
      style={tailwind('bg-red-500 px-8 py-3 rounded mb-3')}
      onPress={() => navigation.navigate('Home')}
    >
      <Text style={tailwind('text-white font-medium text-center')}>Next</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={tailwind('border border-red-500 px-8 py-3 rounded')}
      onPress={() => navigation.navigate('Home')}
    >
      <Text style={tailwind('text-red-500 font-medium text-center')}>Skip</Text>
    </TouchableOpacity>
  </View>
</SafeAreaViewBase>

);
};

export default CheckMeals;
