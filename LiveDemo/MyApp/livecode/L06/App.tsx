import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

async function fetchTodos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

export default function App() {
  const [status, setStatus] = React.useState("loading");

  function load() {
    setStatus("loading");
    fetchTodos().then();
  }

  React.useEffect(() => {
    load();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>TODOS</Text>
          {status === "loading" && <Text style={styles.text}>Loading...</Text>}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#67f",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px #aaa",
    margin: 30,
  },
  title: {
    color: "#43f",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    margin: 15,
  },
  text: {
    color: "#335",
    textAlign: "center",
  },
});
