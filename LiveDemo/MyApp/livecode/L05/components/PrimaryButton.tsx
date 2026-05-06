import { Pressable, Text } from "react-native"
import { styles } from "../screens/UsersSceen";

interface PrimaryButtonProps {
  label : string;
  onPress : () => void;
}

export default function PrimaryButton({label, onPress} : PrimaryButtonProps) {

  return(
    <Pressable style={styles.button} onPress={onPress}>
      <Text>{label}</Text>
    </Pressable>
  )
}
