import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { RootStackScreenProps } from "./navigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  image: {
    height: 480,
    width: 380,
    alignSelf: "center",
    borderRadius: 5,
  },
  box: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 10,
    paddingLeft: 20,
  },
  desc: {
    color: "#667",
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 20,
  },
  date: {
    color: "#BFBFBF",
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 20,
  },
});
function Details({ navigation, route }: RootStackScreenProps<"Details">) {
  const images = {
    uri: `https://image.tmdb.org/t/p/w500/${route.params.poster_path}`,
  };
  return (
    <ScrollView style={styles.container} key={route.params.id}>
      <View style={styles.box}>
        <Image style={styles.image} source={images} resizeMode="cover" />
      </View>
      <Text style={styles.text}>{route.params.title}</Text>
      <Text style={styles.desc}>{route.params.overview}</Text>
      <Text style={styles.date}>Release Date: {route.params.release_date}</Text>
    </ScrollView>
  );
}

export { Details };
