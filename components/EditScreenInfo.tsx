import { Text, View, Image } from 'react-native';
import logo from '../assets/foodbag-logo.png';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will. Tchew automatically update.';

  return (
    <View className={styles.
    homeScreen}>
      <View className={styles.getStartedContainer}>
            <Image source={logo} style={{ width: 200, height: 250 }} />
        <View
          className={styles.codeHighlightContainer}
          // darkModeStyle={styles.codeHighlightContainerDark}
        >
        </View>
        {/* <Text className={styles.getStartedText}>{description}</Text> */}
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
