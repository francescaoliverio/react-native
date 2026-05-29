import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type StatusType = "" | "loading" | "error" | "success";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<StatusType>("");

  const nameOk = name.trim().length >= 2;
  const emailOk = email.includes("@");
  const msgHasError = message.trim().toLowerCase().includes("error");
  const messageOk = message.trim().length >= 10 || msgHasError;
  const canSubmit = nameOk && emailOk && messageOk;
  const isSending = status === "loading";

  function onSubmit() {
    setSubmitted(true);
    if (canSubmit) {
      setStatus("loading");
      setTimeout(() => {
        if (msgHasError) {
          setStatus("error");
        } else {
          setStatus("success");
        }
      }, 1000);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView style={{ padding: 20, gap: 20 }}>
            <Text style={styles.title}>Contact Support</Text>
            <View style={styles.form}>
              <Text style={styles.label}>Name:</Text>
              <TextInput placeholder="Please enter your name" style={[styles.input, submitted && !nameOk && styles.inputError]} onChangeText={setName} />
              {submitted && !nameOk && <Text style={styles.errorText}>Min 2 characters</Text>}
              <Text style={styles.label}>Email:</Text>
              <TextInput placeholder="Please enter your email" style={[styles.input, submitted && !emailOk && styles.inputError]} onChangeText={setEmail} />
              {submitted && !emailOk && <Text style={styles.errorText}>Email must include '@'</Text>}
              <Text style={styles.label}>Message:</Text>
              <TextInput placeholder="How can we help you?" style={[styles.input, styles.textArea, submitted && !messageOk && styles.inputError]}
                onChangeText={setMessage} multiline numberOfLines={4} textAlignVertical="top" />
              {submitted && !messageOk && <Text style={styles.errorText}>Min 10 characters</Text>}
              <Pressable onPress={onSubmit} style={[styles.button, { backgroundColor: !canSubmit || isSending ? "#40f9" : "#50f" }]}>
                <Text style={styles.btnText}>{status === "loading" ? "Sending..." : "Send"}</Text>
              </Pressable>
              {status === "error" && <Text style={[styles.statusText, { color: "red" }]}>❌ An error occurred. Please try again.</Text>}
              {status === "success" && <Text style={[styles.statusText, { color: "green" }]}>✅ Message sent. Thank you for reaching us!</Text>}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
  },
  form: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: 20,
  },
  label: {
    color: "#222",
    fontWeight: "600",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#ccc2",
    borderColor: "#ccc",
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    minHeight: 100,
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
    backgroundColor: "#fdd",
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#50f",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  statusText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
