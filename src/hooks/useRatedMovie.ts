import { QueryFunction, useQuery } from "@tanstack/react-query";
import { API } from "../../API/api";
import { TMovie } from "../../types/TMovie";

const RatedMoviesKeys = {
  all: ["topRatedMovies"] as const,
};

type TRatedQueryKey = typeof RatedMoviesKeys.all;

const fetchRatedMovieData: QueryFunction<
  TMovie[],
  TRatedQueryKey
> = async () => {
  const response = await API.get("movie/top_rated");
  return response.data.results;
};

const useRatedMovies = () => {
  return useQuery({
    queryKey: RatedMoviesKeys.all,
    queryFn: fetchRatedMovieData,
  });
};

export { useRatedMovies };
