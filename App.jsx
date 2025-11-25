import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CheckMeals from 'pages/CheckMeals';
import EditScreenInfo from 'components/Onboarding/EditScreenInfo';



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
         {/* <Stack.Screen 
          name="CheckMeals" 
          component={CheckMeals} 
          options={{ headerShown:false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
