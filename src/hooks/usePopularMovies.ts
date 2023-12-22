import { QueryFunction, useQuery } from "@tanstack/react-query";
import { API } from "../../API/api";
import { TMovie } from "../../types/TMovie";

const popularMoviesKeys = {
  all: ["popularMovies"] as const,
};

type TPopularQueryKey = typeof popularMoviesKeys.all;

const fetchCardsData: QueryFunction<TMovie[], TPopularQueryKey> = async () => {
  const response = await API.get("movie/popular");
  return response.data.results;
};

const usePopularMovies = () => {
  return useQuery({
    queryKey: popularMoviesKeys.all,
    queryFn: fetchCardsData,
  });
};

export { usePopularMovies };
