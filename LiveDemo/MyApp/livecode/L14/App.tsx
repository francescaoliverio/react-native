// LiveDemo\MyApp\livecode\L14\App.tsx

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./pages/Home";
import Details from "./pages/Details";

const Stack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      linking: {
        path: "home",
      },
    },
    Details: {
      screen: Details,
      linking: {
        path: "details/:id",
      },
    },
  },
});

const linking = {
  prefixes: ["myapp://"],
};

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Navigation linking={linking} />
    </SafeAreaProvider>
  );
}