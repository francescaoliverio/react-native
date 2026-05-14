import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Avatar({ uri }: { uri: string }) {
  const [failed, setFailed] = React.useState(false);

  return (
    <View style={styles.container}>
      {failed ? (
        <View style={styles.image}><Text style={{fontSize: 40}}>?</Text></View>
      ) : (
        <Image source={{ uri }} style={styles.image} onError={() => setFailed(true)} />
      )}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Avatar uri="https://picsm.photos/100" />
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.text}>Welcome back!</Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.9 },
            ]}
            onPress={() => console.log("Pressed")}
          >
            <Text style={styles.buttonText}>Tap me</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    gap: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: "#43f",
    backgroundColor: "#43f",
    boxShadow: "0px 0px 4px #aaa",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  title: {
    color: "#335",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 30,
  },
  text: {
    color: "#335",
    textAlign: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#335",
    borderRadius: 100,
    borderWidth: 1,
    height: 100,
    width: 100,
  },
});