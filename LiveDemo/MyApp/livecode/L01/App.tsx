import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface GreetingProp {
  name: string;
}

function Greeting({ name }: GreetingProp) {
  const safeName = String(name ?? "").trim();

  return <Text>Hello {safeName}</Text>;
}

function DemoButton() {
  const [clicks, setClicks] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setClicks(true)} style={styles.pressable}>
        <Text style={styles.white}>Tap me</Text>
      </Pressable>

      {clicks ? <Text style={styles.tapped}>You tapped!</Text> : null}
    </View>
  );
}

export default function App() {
  // const [state, setState] = useState(false);

  return (
    <View style={styles.container}>
      <Greeting name="Francesca" />
      <Text>Welcome on My App!</Text>
      <DemoButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    margin: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "teal",
  },
  white: {
    color: "#fff"
  },
  tapped: {
    textAlign:"center",
    fontWeight:"bold",
    color:"teal"
  }
});
