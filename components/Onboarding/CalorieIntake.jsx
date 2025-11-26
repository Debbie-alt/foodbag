import { View , Text, Image, TouchableOpacity} from 'react-native'
import { useTailwind } from 'tailwind-rn'
const calorie1 = require('../../assets/calorie1.jpg')
const calorie2 = require('../../assets/calorie2.jpg')
import { useEffect } from 'react'
const calorie3 = require('../../assets/calorie3.jpg')

import { useNavigation } from '@react-navigation/native';


const CalorieIntake = () => {
    const tailwind = useTailwind(); 
    const navigation = useNavigation()
   
  return (
      <View style={tailwind('flex-1')}>
      
            <View style={tailwind('bg-red-500 h-1/2 w-full rounded-bl-full justify-end py-10 items-center')}>
               <View style = {tailwind('relative mt-4')}>
                       <Image source={calorie3} style={ [ tailwind('mx-2 rounded-2xl border-4 border-white'), { width: 140, height: 140 }  ]} />
             
                        
                      </View>
                     <View
                     style={tailwind('flex flex-row items-center bottom-10 z-20')}>
                       <Image source={calorie1} style={ [ tailwind('mx-2 rounded-2xl border-4 border-white'), { width: 140, height: 140 }  ]} />
                       <Image source={calorie2} style={ [ tailwind('mx-2 rounded-bl-2xl rounded-tl-2xl  rounded-tr-2xl border-4 border-white'), { width: 140, height: 140 }  ]} />
             
                     </View>
      
              <View style={tailwind('flex flex-row items-center')}>
                <TouchableOpacity
                  style={tailwind('bg-white  px-1.5 py-1.5 rounded-full ')}
                />
                <TouchableOpacity
                  style={tailwind('bg-white px-2 py-2 rounded-full mx-4')}
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
                Know your calories Intake
              </Text>
      
              <Text style={tailwind('text-center text-black text-lg mb-14')}>
                Every meal counts. See your calories intake per meal and stay in control of daily limits without overthinking what to eat next.
              </Text>
      
              <View style={tailwind('flex flex-row items-center justify-center w-full')}>
      
                <TouchableOpacity
                  style={tailwind('px-14 py-3 bg-[#FFFCF0] shadow-md rounded-full')}
                  onPress={() => navigation.navigate('SignIn')}
                >
                  <Text style={tailwind('text-red-500 text-lg font-medium text-center')}>Skip</Text>
                </TouchableOpacity>
      
                <TouchableOpacity
                  style={tailwind('bg-red-500 px-14 py-3 rounded-full mx-4')}
                  onPress={() => navigation.navigate('EatWell')}
                >
                  <Text style={tailwind('text-white text-lg font-medium text-center')}>Next</Text>
                </TouchableOpacity>
      
              </View>
      
            </View>
      
          </View>
  )
}

export default CalorieIntake