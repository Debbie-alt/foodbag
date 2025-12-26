import { TailwindProvider } from 'tailwind-rn'
import generated from './tailwind.json'
import overrides from './tailwind.overrides.json'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import EditScreenInfo from './components/EditScreenInfo'
import CheckMeals from './components/Onboarding/CheckMeals'
import CalorieIntake from './components/Onboarding/CalorieIntake'
import Eatwell from './components/Onboarding/EatWell'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

const utilities = {
  ...generated,
  ...overrides
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
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
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="CalorieIntake"
            component={CalorieIntake}
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="EatWell"
            component={Eatwell}
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
              <Stack.Screen 
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  )
}
