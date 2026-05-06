import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

interface Item {
  id: string;
  title: string;
}

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Count: {count}</Text>
      <Pressable onPress={() => setCount((c) => c + 1)} style={styles.pressable}>
        <Text style={styles.white}>Increment</Text>
      </Pressable>
      {/* <FlatList keyExtractor={} renderItem={} data={} contentContainerStyle={styles.list}></FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00808020",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    margin: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "teal"
  },
  bold: {
    fontWeight:"bold",
  },
  white: {
    color: "#fff"
  },
  list: {
    gap: 8
  }
});
