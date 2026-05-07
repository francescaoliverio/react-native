import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

async function fetchTodos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

interface FlatListProps {
  id: string
  title: string
  completed: boolean
}

export default function App() {
  const [status, setStatus] = React.useState("loading");
  const [todos, setTodos] = React.useState<FlatListProps[]>([]);

  function load() {
    setStatus("loading");
    fetchTodos().then((data) => {
      setTodos(data);
      setStatus("success");
    }).catch((e) => setStatus("error"));
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
          {status === "error" && (
            <Pressable onPress={load} style={styles.button}>
              <Text style={styles.text}>Retry</Text>
            </Pressable>
          )}
          {status === "success" && (
            <FlatList
              data={todos}
              keyExtractor={(item) => (item.id)}
              renderItem={({ item }) => (
                <Text style={styles.list}>
                  {item.completed ? "✓" : "○"} {item.title}
                </Text>
              )}
            />
          )}
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
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    margin: 15,
  },
  text: {
    color: "#335",
    textAlign: "center",
  },
  list: {
    color: "#335",
    lineHeight: 30,
    fontSize: 18,
    margin: 8,
  }
});
