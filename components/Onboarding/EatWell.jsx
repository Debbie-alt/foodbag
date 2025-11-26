import { View , Text, Image, TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn'
const eatwell1 = require('../../assets/eatwell1.jpg')
const eatwell2 = require('../../assets/eatwell2.jpg')
const eatwell3 = require('../../assets/eatwell3.jpg')

import { useNavigation } from '@react-navigation/native';

const Eatwell = () => {
    const tailwind = useTailwind(); 
    const navigation = useNavigation()
    

    
    return (
      <View style={tailwind('flex-1')}>
      
        <View style={tailwind('bg-red-500 h-1/2 w-full rounded-bl-full justify-end py-10 items-center')}>
          
          <View style={tailwind('relative mt-4')}>
            <Image source={eatwell1} style={[tailwind('mx-2 rounded-2xl border-4 border-white'), { width: 140, height: 140 }]} />
          </View>
          
          <View style={tailwind('flex flex-row items-center bottom-10 z-20')}>
            <Image source={eatwell3} style={[tailwind('mx-2 rounded-2xl border-4 border-white'), { width: 140, height: 140 }]} />
            <Image source={eatwell2} style={[tailwind('mx-2 rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl border-4 border-white'), { width: 140, height: 140 }]} />
          </View>
      
          <View style={tailwind('flex flex-row items-center')}>
            <TouchableOpacity style={tailwind('bg-white px-1.5 py-1.5 rounded-full')} />
            <TouchableOpacity
              style={tailwind('bg-white px-2 py-2 rounded-full mx-4')}
              onPress={() => navigation.navigate('EatwellIntake')}
            />
            <TouchableOpacity
              style={tailwind('bg-white px-1.5 py-1.5 rounded-full')}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
      
        </View>
      
        <View style={tailwind('h-1/2 w-full items-center px-6')}>
      
          <Text style={tailwind('text-2xl font-medium mb-2 py-10 text-black')}>
                 Eat Well Within Your Budget         
           </Text>
      
          <Text style={tailwind('text-center text-black text-lg mb-14')}>
 Get healthy meals delivered without stretching your wallet. We match your diet goals to affordable options near you — fresh, fast, and reliable.          </Text>
      
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
    )
}

export default Eatwell
