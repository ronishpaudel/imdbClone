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
import { useUpcoming } from "../hooks/useUpcoming";
import Carousel from "react-native-snap-carousel";
import { RootStackScreenProps } from "./navigator";
import { useNavigation } from "@react-navigation/native";
import { useMovieSearch } from "../hooks/useMovieSearch";
import { useDebounce } from "../hooks/useDebounce";
import { useSnapshot } from "valtio";
import { searchStore } from "../../store/searchStore";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    paddingLeft: "3%",
    paddingTop: "4%",
  },
  loadingErrorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nowLoadingContainer: {
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
  upcommingContainer: {
    flexDirection: "row",
  },
  cardItem: {
    // flexBasis: "50%",
    padding: 5,
  },
  UpcomingCardItem: {
    // flexBasis: "50%",
    padding: 5,
  },
  carouselContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export const PopularMoviesList = () => {
  const { data: popularMovies, isError, isLoading, error } = usePopularMovies();

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
    <View>
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
          ListHeaderComponent={<UpcomingMovies />}
        />
      )}
    </View>
  );
};

export function UpcomingMovies() {
  const {
    data: upcomingMovies,
    isError: isUpcomingError,
    isLoading: isUpcomingLoading,
    error: upcomingError,
  } = useUpcoming();

  const navigation =
    useNavigation<RootStackScreenProps<"Main">["navigation"]>();
  function dataNotLoad() {
    if (upcomingError) {
      console.log(upcomingError);
    }
  }
  const renderUpcomingMovieCard = ({ item }: { item: TMovie }) => (
    <View style={styles.UpcomingCardItem}>
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
    <View style={styles.carouselContainer}>
      <Text
        style={{
          color: "rgb(245,197,24)",
          fontWeight: "bold",
          padding: 10,
          fontSize: 16,
        }}
      >
        Upcoming Movies
      </Text>
      {isUpcomingLoading ? (
        <View style={styles.loadingErrorContainer}>
          <Text style={{ color: "white" }}>Loading....</Text>
        </View>
      ) : isUpcomingError ? (
        <TouchableOpacity
          onPress={dataNotLoad}
          style={styles.loadingErrorContainer}
        >
          <Text style={styles.errorText}>Error occurred. Tap to retry!</Text>
        </TouchableOpacity>
      ) : upcomingMovies && upcomingMovies.length > 0 ? (
        <Carousel
          data={upcomingMovies}
          renderItem={renderUpcomingMovieCard}
          sliderWidth={410}
          itemWidth={192}
          layout={"default"}
          loop={true}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
        />
      ) : (
        <Text>No upcoming movies found!</Text>
      )}
      <View>
        <Text
          style={{
            color: "rgb(245,197,24)",
            fontWeight: "bold",
            padding: 10,
            fontSize: 16,
          }}
        >
          Popular Movies
        </Text>
      </View>
    </View>
  );
}
export const SearchMoviesList = () => {
  const { searchQuery } = useSnapshot(searchStore);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const {
    data: movieSearch,
    isError,
    isLoading,
    error,
  } = useMovieSearch(debouncedSearchQuery);
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
    <View>
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
          data={movieSearch}
          renderItem={renderMovieCard}
          keyExtractor={(item: TMovie) => item.id.toString()}
          contentContainerStyle={styles.cardContainer}
          numColumns={2}
        />
      )}
    </View>
  );
};
export function Main({ navigation, route }: RootStackScreenProps<"Main">) {
  const { searchQuery } = useSnapshot(searchStore);
  return (
    <View style={styles.container}>
      {searchQuery ? <SearchMoviesList /> : <PopularMoviesList />}
    </View>
  );
}
