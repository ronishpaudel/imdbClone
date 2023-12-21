import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Card from "./card";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { TMovie } from "../../types/TMovie";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "10%",
  },
  loadingErrorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "white",
    padding: 10,
  },
  cardContainer: {
    flexDirection: "column",
  },
  cardItem: {
    flexBasis: "50%",
    padding: 5,
  },
});

export default function Main() {
  const { data: popularMovies, isError, isLoading, error } = usePopularMovies();

  function dataNotLoad() {
    if (error) {
      console.log(error);
      console.log(process.env.PUBLIC_TMDB_API_KEY);
    }
  }

  const renderMovieCard = ({ item }: { item: TMovie }) => (
    <View style={styles.cardItem}>
      <Card
        title={item.title}
        description={item.overview}
        image={item.poster_path}
        cardKey={item.id}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingErrorContainer}>
          <Text style={{ color: "white" }}>Loading....</Text>
        </View>
      ) : isError ? (
        <TouchableOpacity
          onPress={dataNotLoad}
          style={styles.loadingErrorContainer}
        >
          <Text style={styles.errorText}>Error occurred. Tap to retry!</Text>
        </TouchableOpacity>
      ) : (
        <FlatList
          data={popularMovies}
          renderItem={renderMovieCard}
          keyExtractor={(item: TMovie) => item.id.toString()}
          contentContainerStyle={styles.cardContainer}
          numColumns={2}
        />
      )}
    </View>
  );
}
