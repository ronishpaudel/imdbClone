import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "./card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 10,
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card />
      </ScrollView>
    </View>
  );
}
