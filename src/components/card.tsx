import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ICard {
  title: string;
  description: string;
  image: string;
  cardKey: number;
  onPress: TouchableOpacityProps["onPress"];
}

export default function Card({
  cardKey,
  title,
  description,
  image,
  onPress,
}: ICard) {
  const images = { uri: `https://image.tmdb.org/t/p/w500/${image}` };
  return (
    <TouchableOpacity style={styles.container} key={cardKey} onPress={onPress}>
      <Image source={images} style={styles.image} />
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
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
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
  },

  title: {
    paddingTop: 2,
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
