import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F0F0F",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    padding: "2%",
  },
  box: {
    backgroundColor: "rgb(245,197,24)",
    borderRadius: 5,
    marginLeft: "3%",
    marginRight: "3%",
  },
});
export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>ImdbClone</Text>
      </View>

      <Image source={{ uri: "asset:/menuIcon.png" }} />
    </SafeAreaView>
  );
}
