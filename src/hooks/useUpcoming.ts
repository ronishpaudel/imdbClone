import { QueryFunction, useQuery } from "@tanstack/react-query";
import { API } from "../../API/api";
import { TMovie } from "../../types/TMovie";

const upcomingKeys = {
  all: ["upcomingPlaying"] as const,
};

type TUpcomingQueryKey = typeof upcomingKeys.all;

const fetchUpcomingData: QueryFunction<
  TMovie[],
  TUpcomingQueryKey
> = async () => {
  const response = await API.get("movie/upcoming");
  return response.data.results;
};

const useUpcoming = () => {
  return useQuery({
    queryKey: upcomingKeys.all,
    queryFn: fetchUpcomingData,
  });
};

export { useUpcoming };
