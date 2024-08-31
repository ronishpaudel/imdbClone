import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ICard {
  title: string;
  description: string;
  image: string;
  cardKey: number;
  Release_Date?: string;
  onPress: TouchableOpacityProps["onPress"];
}

export default function Card({
  cardKey,
  title,
  description,
  image,
  Release_Date,
  onPress,
}: ICard) {
  const images = { uri: `https://image.tmdb.org/t/p/w500/${image}` };

  return (
    <TouchableOpacity style={styles.container} key={cardKey} onPress={onPress}>
      <Image source={images} style={styles.image} resizeMode="cover" />
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>
        <Text>{Release_Date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 191,
    backgroundColor: "rgb(245,197,24)",
    borderRadius: 8,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 0,
    gap: 8,
  },
  image: {
    width: 180,
    height: 240,
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
    paddingTop: 5,
    alignSelf: "center",
    height: 60,
  },
});
