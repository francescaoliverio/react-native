import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import addNote, { notes } from "../services/users";

export default function UserScreen() {
  const [text, setText] = React.useState("");
  const [status, setStatus] = React.useState("empty");
  const [, refresh] = React.useState(0);

  function load() {
    setStatus("loading");
    setTimeout(() => {
      setStatus(notes.length ? "success" : "empty");
      refresh((n) => n + 1);
    }, 300);
  }

  React.useEffect(() => {
    load();
  }, []);
  
  function onAdd() {
    const trimmed = text.trim();
    addNote(trimmed);
    setText("");
    load();
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Notes</Text>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Write a note"
            style={styles.input}
          />
          <PrimaryButton label="Add" onPress={onAdd} />
          {status === "loading" && <Text>Caricamento...</Text>}
          {status === "empty" && <Text>Ancora niente qui</Text>}
          {status === "error" && (
            <Pressable style={styles.button} onPress={load}>
              <Text style={styles.buttonText}>Riprova</Text>
            </Pressable>
          )}
          {status === "success" &&
            notes.map((n) => <Text key={n.id}>• {n.text}</Text>)}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 20, fontWeight: "600" },
  input: { borderWidth: 1, padding: 12, borderRadius: 8 },
  button: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  buttonText: { fontWeight: "600" },
});