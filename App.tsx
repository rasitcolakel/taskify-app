import { RootNavigator } from "./src/navigation/root-navigator";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "PT-Regular": require("./assets/fonts/PT/PT-Regular.ttf"),
    "PT-Bold": require("./assets/fonts/PT/PT-Bold.ttf"),
    "PT-Italic": require("./assets/fonts/PT/PT-Italic.ttf"),
    "PT-BoldItalic": require("./assets/fonts/PT/PT-BoldItalic.ttf"),
    // Poppins
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Italic": require("./assets/fonts/Poppins/Poppins-Italic.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <RootNavigator />;
}
