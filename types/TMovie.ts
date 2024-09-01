export type TMovie = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};
interface Trailer {
  categories: string[];
  id: string;
  language: string;
  published: string;
  thumbnail: string;
  title: string;
  views: number;
  videos: [];
  youtube_channel_id: string;
  youtube_thumbnail: string;
  youtube_video_id: string;
}

export interface Data {
  data: Trailer[];
}
