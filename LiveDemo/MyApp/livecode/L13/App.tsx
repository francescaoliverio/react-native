// LiveDemo\MyApp\livecode\L13\App.tsx

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./pages/Home";
import Details from "./pages/Details";

const Stack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Details: Details,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaProvider>
  );
}
