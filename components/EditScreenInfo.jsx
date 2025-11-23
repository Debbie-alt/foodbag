import { Text, View, Image , Button} from 'react-native';
const logo = require('../assets/foodbag-logo.png');
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

 const EditScreenInfo = () => {
  const navigation = useNavigation();
useEffect(() => {
  setTimeout(() => {
  navigation.navigate('CheckMeals');
  }, 4000);
}, [navigation]);

  return (
    <View className={styles.
    homeScreen} style={{ flex: 1  , backgroundColor: '#F50316', justifyContent: 'center', alignItems: 'center'  }}>
      <View className={styles.getStartedContainer}>
            <Image source={logo} style={{ width: 200, height: 250 }} />
        <View
          className={styles.codeHighlightContainer}
        >
        </View>
      </View>
    </View>
  );
};

const styles = {
   homeScreen: ` flex flex-1 flex-col items-center justify-center w-full  h-screen  bg-[#F50316]`,
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center justify-center mx-12`,
  getStartedText: `text-lg leading-6 text-center`,
  helpContainer: `items-center mx-5 mt-4`,
  helpLink: ``,
  helpLinkText: `text-center`,
  homeScreenFilename: ``,
};
export default EditScreenInfo;
