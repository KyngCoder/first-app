import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";
import { Text } from "react-native";

export default function App() {
  const Stack = createStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  // const [fontsLoaded] = useFonts({
  //   InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  //   InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  //   interMedium: require("./assets/fonts/Inter-Medium.ttf"),
  //   interRegular: require("./assets/fonts/Inter-Regular.ttf"),
  //   InterLight: require("./assets/fonts/Inter-Light.ttf"),
  // });

  // if (!fontsLoaded) return <Text>Loading....</Text>

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
