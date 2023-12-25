import { useQuery, QueryFunction } from "@tanstack/react-query";
import axios from "axios";
import { Data } from "../../types/TMovie";

export const trailerResultKeys = {
  all: ["trailerResult"] as const,
  search: (query: number) => [...trailerResultKeys.all, { query }] as const,
};

type TtrailerQueryKey = ReturnType<typeof trailerResultKeys.search>;

const fetchTrailerData: QueryFunction<Data[], TtrailerQueryKey> = async (
  context
) => {
  const movies_id = context.queryKey[1].query;
  const response = await axios.get(
    `https://api.kinocheck.de/movies?tmdb_id=${movies_id}`
  );
  return response.data;
};

const useTrailerHook = (movies_id: number) => {
  const TrailerQuery = useQuery({
    queryKey: trailerResultKeys.search(movies_id),
    queryFn: fetchTrailerData,
  });
  return TrailerQuery;
};

export { useTrailerHook };
