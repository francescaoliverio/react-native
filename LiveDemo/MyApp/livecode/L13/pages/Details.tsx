// LiveDemo\MyApp\livecode\L13\pages\Details.tsx

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { Text, View } from "react-native";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  const id = route.params?.id ?? "Nessun ID";

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginVertical: 10 }}>Details Screen</Text>
      <Text style={{ marginBottom: 20 }}>id: {id}</Text>
      <Button onPress={() => navigation.goBack()}>Go back to Home</Button>
    </SafeAreaView>
  );
}
