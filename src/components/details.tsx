import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { RootStackScreenProps } from "./navigator";
import { WebView } from "react-native-webview";
import { useTrailerHook } from "../hooks/useTrailerHook";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  video: {
    width: 400,
    height: 160,
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
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 20,
  },
  desc: {
    color: "#667",
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 20,
  },
  date: {
    color: "#BFBFBF",
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 20,
  },
  image: {
    height: 480,
    width: 380,
    alignSelf: "center",
    borderRadius: 5,
  },
});

function Details({ route }: RootStackScreenProps<"Details">) {
  const { data } = useTrailerHook(route.params.id);
  const images = {
    uri: `https://image.tmdb.org/t/p/w500/${route.params.poster_path}`,
  };
  const video = {
    uri: `https://www.youtube.com/watch?v=${data?.videos?.[1]?.youtube_video_id}`,
  };

  return (
    <ScrollView style={styles.container} key={route.params.id}>
      <View style={styles.box}>
        <Image style={styles.image} source={images} resizeMode="cover" />
      </View>
      <Text style={styles.text}>{route.params.title}</Text>
      <Text style={styles.desc}>{route.params.overview}</Text>
      <Text style={styles.date}>Release Date: {route.params.release_date}</Text>
      <View style={styles.box}>
        <WebView style={styles.video} javaScriptEnabled={true} source={video} />
      </View>
    </ScrollView>
  );
}

export { Details };
