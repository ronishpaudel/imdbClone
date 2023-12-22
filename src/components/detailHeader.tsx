import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "./navigator";

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
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <TouchableOpacity style={styles.detailBox}>
        <Image
          source={require("../images/backCaret.png")}
          style={styles.image}
        />
        <Text style={styles.detailText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../images/search.png")}
          style={{
            height: 30,
            width: 30,
            marginRight: "5%",
            alignSelf: "center",
            borderRadius: 4,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
