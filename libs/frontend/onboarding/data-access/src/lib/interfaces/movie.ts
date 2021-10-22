export interface IMovie {
  backdropPath?: string;
  backdropUrl?: string;
  genres?: IGenre[];
  homepage?: string;
  id?: number;
  imagePath?: string;
  imageUrl?: string;
  originalLanguage?: string;
  originalTitle?: string;
  overview?: string;
  releaseDate?: string;
  runtime?: number;
  status?: string;
  tagline?: string;
  title?: string;
  voteAverage?: number;
  progressBarTitle?: string;
}

export interface IGenre {
  id?: number;
  name?: string;
}
