import { View, Text, StyleSheet } from "react-native";
import { RootStackScreenProps } from "./navigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
});
function Details({ navigation, route }: RootStackScreenProps<"Details">) {
  return (
    <View style={styles.container}>
      <Text>Hii {route.params.id}</Text>
    </View>
  );
}

export { Details };
