import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
});

export default function Header() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.box}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>ImdbClone</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          source={require("../images/search.png")}
          style={{
            height: 32,
            width: 40,
            marginRight: "3%",
            alignSelf: "center",
            borderRadius: 4,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../images/menuIcon.png")}
          style={{
            height: 32,
            width: 40,
            backgroundColor: "rgb(245,197,24)",
            marginRight: "3%",
            alignSelf: "center",
            borderRadius: 4,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
