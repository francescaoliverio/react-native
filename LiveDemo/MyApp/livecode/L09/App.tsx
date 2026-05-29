import { useState } from "react";

import { Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const emailOk = email.includes("@");
  const passwordOk = password.length >= 6;
  function onEmailChange(input: string) {
    setEmail(input)
  }
  function onPasswordChange(input: string) {
    setPassword(input)
  }
  function onSubmit() {
    setErrorMsg(true)
    if (emailOk && passwordOk) {
      setSubmitted(true)
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <Text style={styles.title}>Sign in</Text>
        <ScrollView>
          <View style={styles.form}>
            <Text style={styles.theme}>Email:</Text>
            <TextInput style={[styles.theme, styles.input]} onChangeText={onEmailChange} />
            {errorMsg && !emailOk && <Text style={!emailOk && styles.isNotValid}>Email must include '@'</Text>}
            <Text style={styles.theme}>Password:</Text>
            <TextInput style={[styles.theme, styles.input]} onChangeText={onPasswordChange} secureTextEntry />
            {errorMsg && !passwordOk && <Text style={!passwordOk && styles.isNotValid}>Min 6 characters</Text>}
            <Pressable onPress={onSubmit} style={styles.button}>
              <Text style={styles.btnText}>Sign in</Text>
            </Pressable>
            {submitted && <Text style={{ color: "green" }}>Submitted</Text>}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  theme: {
    color: "#222"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  form: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#bbb2",
  },
  isNotValid: {
    color: "red"
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#50f",
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: "center",
  }
});
