import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import './global.css';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'pages/HomeScreen';
import CheckMeals from 'pages/CheckMeals';


export default function App() {

  const RootStack = createNativeStackNavigator(
    {
      Home: {
      screen: HomeScreen,
      options: {title: 'Welcome'},
    },
    Onboarding: {
      screen: CheckMeals,
    },
    }
  );
  const Navigation = createStaticNavigation(RootStack);
  return (
    <>
      <Navigation/>
      <StatusBar style="auto" />
    </>
  );
}
