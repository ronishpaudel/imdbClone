import { useQuery, QueryFunction } from "@tanstack/react-query";
import { API } from "../../API/api";
import { TMovie } from "../../types/TMovie";

export const searchResultKeys = {
  all: ["searchResult"] as const,
  search: (query: string) => [...searchResultKeys.all, { query }] as const,
};

type TSearchQueryKey = ReturnType<typeof searchResultKeys.search>;

const fetchMovieData: QueryFunction<TMovie[], TSearchQueryKey> = async (
  context
) => {
  const query = context.queryKey[1].query;
  const response = await API.get(`search/movie?query=${query}`);
  return response.data.results;
};

const useMovieSearch = ({ searchInput }: { searchInput: string }) => {
  const moviesQuery = useQuery({
    queryKey: searchResultKeys.search(searchInput),
    queryFn: fetchMovieData,
  });
  return moviesQuery;
};

export { useMovieSearch };
