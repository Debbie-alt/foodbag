import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditScreenInfo from 'components/EditScreenInfo';
import CheckMeals from 'pages/CheckMeals';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={EditScreenInfo} 
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="CheckMeals" 
          component={CheckMeals} 
          options={{ headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}