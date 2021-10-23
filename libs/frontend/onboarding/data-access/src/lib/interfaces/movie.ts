export interface IMovie {
  backdropPath?: string;
  backdropUrl?: string;
  genres?: IGenre[];
  homepage?: string;
  id?: number;
  backdrop_path?: string;
  poster_path?: string;
  originalLanguage?: string;
  originalTitle?: string;
  overview?: string;
  release_date?: string;
  runtime?: number;
  status?: string;
  tagline?: string;
  title?: string;
  vote_average?: number;
  progressBarTitle?: string;
}

export interface IGenre {
  id?: number;
  name?: string;
}

export interface IResponseMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<IMovie>;
}
