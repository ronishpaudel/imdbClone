import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F0F0F",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textWrapper: {
    backgroundColor: "rgb(245,197,24)",
    borderRadius: 5,
    marginLeft: "3%",
    alignSelf: "center",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    padding: "2%",
    fontSize: 16,
  },
  box: {
    paddingLeft: "2%",
  },
  image: {
    height: 20,
    width: 20,
    marginRight: "5%",
    alignSelf: "center",
    borderRadius: 4,
    tintColor: "rgb(245,197,24)",
  },
  detailBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  detailText: { color: "rgb(245,197,24)", fontSize: 16 },
});

export function DetailHeader() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <TouchableOpacity style={styles.detailBox} onPress={navigation.goBack}>
        <Image
          source={require("../images/backCaret.png")}
          style={styles.image}
        />
        <Text style={styles.detailText}>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
