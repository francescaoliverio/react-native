import React from "react"
import { Pressable, Text, StyleSheet, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  const[status, setStatus] = React.useState("Ready")

  React.useEffect(() => {
    console.log("App mounted")
  }, [])

  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text>STATUS: {status}</Text>
          <Pressable onPress={() => (setStatus("Pressed"))} style={styles.pressable}>
            <Text style={styles.white}>Test integration</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  pressable: {
    margin: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "teal",
  },
  row: {
    backgroundColor: "#00808020",
    borderColor: 'teal',
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  white: {
    color: "white",
  },
  list: {
    gap: 8,
  },
});