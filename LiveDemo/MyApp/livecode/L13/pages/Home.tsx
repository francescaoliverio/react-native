// LiveDemo\MyApp\livecode\L13\pages\Home.tsx

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { FlatList, Text, View } from "react-native";

const ITEMS = [
  {
    id: "1",
    description: "number one"
  },
  {
    id: "2",
    description: "number two"
  },
  {
    id: "3",
    description: "number three"
  },
]

const fakeObj = {}

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginVertical: 10 }}>Home Screen</Text>
      <View style={{ flex: 0, alignItems: "center", justifyContent: "center" }}>
        <FlatList
          data={ITEMS}
          renderItem={({ item }) => (
            <Button
              onPress={() => {
                navigation.navigate("Details", { id: item.id });
              }}
              style={{ marginVertical: 6 }}
            >
              Go to Details {item.id}
            </Button>
          )}
          keyExtractor={(item) => item.id}
        />
        <Button onPress={() => {navigation.navigate("Details", { id: fakeObj.id })}} style={{ marginVertical: 6 }}>Go to Details {fakeObj.id}</Button>
      </View>
    </SafeAreaView>
  );
}
