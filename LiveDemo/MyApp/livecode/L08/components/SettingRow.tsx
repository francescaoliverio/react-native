import { Switch, Text, TextInput, View } from "react-native";
interface SettingRowProps {
  type: string;
  label: string;
  styles: any;
  theme: boolean;
  onValueChange: (value: any) => void;
}

export default function SettingRow({ type, label, styles, theme, onValueChange }: SettingRowProps) {

  return (
    <View style={styles.field}>
      <Text style={styles.theme}>{label}</Text>
      {type === "numInput" && <TextInput style={[styles.theme, styles.input]} onChangeText={onValueChange} keyboardType="numeric" />}
      {type === "switch" && <Switch value={theme} onValueChange={onValueChange} ios_backgroundColor="teal" trackColor={{ false: "#fd5", true: "#75f" }} thumbColor={theme ? "#eef" : "#ffe"} />}
    </View>
  );
}