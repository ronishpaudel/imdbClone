import React from "react";
import { StyleSheet, Image, Text, View, ScrollView } from "react-native";

export default function Card() {
  const image = { uri: "/icon.png" };
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.description}>Description</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
