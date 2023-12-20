import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F0F0F",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: "white",
    paddingLeft: "6%",
    paddingRight: "6%",
  },
});
export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Header</Text>
      <Text style={styles.text}>Header</Text>
    </SafeAreaView>
  );
}
