import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";

export default function App() {
  const [fonstsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fonstsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
