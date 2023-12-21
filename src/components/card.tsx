import React from "react";
import { StyleSheet, Image, Text, View, ScrollView } from "react-native";

interface ICard {
  title: string;
  description: string;
  image: string;
  cardKey: number;
}

export default function Card({ cardKey, title, description, image }: ICard) {
  const images = { uri: `https://image.tmdb.org/t/p/w500/${image}` };
  return (
    <View style={styles.container} key={cardKey}>
      <Image source={images} style={styles.image} />
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 191,
    backgroundColor: "rgb(245,197,24)",
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 180,
    height: 195,
    alignSelf: "center",
    borderRadius: 10,
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    alignSelf: "center",
    height: 20,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    alignSelf: "center",
  },
});
