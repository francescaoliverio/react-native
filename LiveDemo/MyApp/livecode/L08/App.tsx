import { useState } from "react";

import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SettingRow from "./components/SettingRow";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const [fontSize, setFontSize] = useState(18);
  const handleFontSize = (text: string) => {
    const parsedValue = parseInt(text, 10);
    if (!isNaN(parsedValue)) {
      setFontSize(parsedValue > 12 && parsedValue < 50 ? parsedValue : 18);
    }
  };
  const styles = getStyles(darkMode, fontSize);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.theme, { flex: 1, padding: 20 }]}>
        <Text style={[styles.theme, styles.title]}>Settings</Text>
        <ScrollView>
          <SettingRow type="numInput" label="Font Size" styles={styles} theme={darkMode} onValueChange={handleFontSize} />
          <SettingRow type="switch" label="Theme" styles={styles} theme={darkMode} onValueChange={toggleDarkMode} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export const getStyles = (darkMode: boolean, fontSize: number) => {
  return StyleSheet.create({
    theme: {
      backgroundColor: darkMode ? "#225" : "white",
      borderColor: darkMode ? "white" : "#222",
      color: darkMode ? "white" : "#222",
      fontSize: fontSize > 12 ? fontSize : 18,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      paddingVertical: 20,
    },
    field: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    input: {
      width: 200,
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 10,
      backgroundColor: "#bbb2",
    },
  });
};
