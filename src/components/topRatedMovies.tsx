import { useNavigation } from "@react-navigation/native";
import { useRatedMovies } from "../hooks/useRatedMovie";
import { RootStackScreenProps } from "./navigator";
import { TMovie } from "../../types/TMovie";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "./card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    paddingLeft: "3%",
    paddingTop: "4%",
  },
  cardItem: {
    padding: 5,
  },
  errorText: {
    color: "white",
    padding: 10,
  },
  loadingErrorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "column",
  },
});

export const TopRatedMoviesList = () => {
  const { data: topRatedMovies, isError, isLoading, error } = useRatedMovies();

  function dataNotLoad() {
    if (error) {
      console.log(error);
    }
  }
  const navigation =
    useNavigation<RootStackScreenProps<"Main">["navigation"]>();
  const renderMovieCard = ({ item }: { item: TMovie }) => (
    <View style={styles.cardItem}>
      <Card
        onPress={() =>
          navigation.navigate("Details", {
            id: item.id,
            title: item.title,
            overview: item.overview,
            poster_path: item.poster_path,
            release_date: item.release_date,
          })
        }
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
          data={topRatedMovies}
          renderItem={renderMovieCard}
          keyExtractor={(item: TMovie) => item.id.toString()}
          contentContainerStyle={styles.cardContainer}
          numColumns={2}
        />
      )}
    </View>
  );
};
