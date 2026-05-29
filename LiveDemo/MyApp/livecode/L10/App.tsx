import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type StatusType = "" | "loading" | "error" | "success";

export default function App() {
  const [pending, setPending] = useState<StatusType>("");
  const [status, setStatus] = useState<StatusType>("");

  function handlePress(value: StatusType) {
    if (value !== "") {
      setStatus("loading");
    }
    setPending(value);
  }

  useEffect(() => {
    if (pending === "") {
      setStatus(pending);
      return;
    }

    const timer = setTimeout(() => {
      setStatus(pending);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pending]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <Text style={styles.title}>Ask Nicely</Text>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Pressable style={[styles.button, { backgroundColor: "#7d7", borderWidth: 1 }]} onPress={() => handlePress("success")}>
              <Text style={styles.text}>Load 😊</Text>
            </Pressable>
            <Pressable style={[styles.button, { backgroundColor: "#fe7", borderWidth: 1 }]} onPress={() => handlePress("loading")}>
              <Text style={styles.text}>Load ∞</Text>
            </Pressable>
            <Pressable style={[styles.button, { backgroundColor: "#f53", borderWidth: 1 }]} onPress={() => handlePress("error")}>
              <Text style={styles.text}>Load 😡</Text>
            </Pressable>
          </View>
          {status === "" && <Text style={styles.text}>Press a button!</Text>}
          {status === "loading" && <Text style={styles.text}>🔄️ Loading...</Text>}
          {status === "error" && <Text style={styles.text}>❌ An error occurred</Text>}
          {status === "success" && <Text style={styles.text}>✅ Loading completed</Text>}
          <Pressable style={styles.button} onPress={() => handlePress("")}>
            <Text style={styles.btnText}>Reset</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#222",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 20,
    textAlign: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#bbb2",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#50f",
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "center",
  },
});
