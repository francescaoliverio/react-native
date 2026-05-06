import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

let rowRenderCount = 0;

function Row({ title }: { title: string }) {
  rowRenderCount += 1;
  console.log(`Row render #${rowRenderCount} – ${title}`);
  return (
    <View style={styles.row}>
      <Text>{title}</Text>
    </View>
  );
}

const ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: String(i + 1),
  title: `Item ${i + 1}`,
}));

let countApp = 0;

export default function App() {
  const [count, setCount] = React.useState(0);
  countApp += 1;
  console.log('App render', countApp)
  // console.log(`App render ${countApp}`)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.bold}>Count: {count}</Text>
          <Pressable onPress={() => setCount((c) => c + 1)} style={styles.pressable}>
            <Text style={styles.white}>Increment</Text>
          </Pressable>
          <FlatList
            data={ITEMS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Row title={item.title} />}
            contentContainerStyle={styles.list}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
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
    color: "#fff",
  },
  list: {
    gap: 8,
  },
});
