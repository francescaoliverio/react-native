import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Title</Text>
        <Image
          source={{ uri: "https://picsum.photos/107" }}
          style={styles.image}
        />
        <Pressable
          onPress={() => {}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Tap</Text>
  </Pressable>
</View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#43f",
    backgroundColor: "#43f",
    boxShadow: "0px 0px 4px #aaa",
    margin: 30,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
  },
  title: {
    color: "#335",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 30,
    margin: 15,
  },
  text: {
    color: "#335",
    textAlign: "center",
  },
  image: {
    alignSelf: "center",
    borderColor: "#335",
    borderRadius: 100,
    height: 100,
    width: 100,
    margin: 8,
  }
});