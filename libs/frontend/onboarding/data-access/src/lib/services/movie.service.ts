import { Injectable } from '@angular/core';
import { ApiService } from '@olimpo/frontend/onboarding/utilities/api';
import {
  getMovieCastMock,
  getMovieCrewMock,
  getMovieDetailsMock,
  getPopularMoviesMock,
  getTopRatedMoviesMock,
} from './mocks/movies.mock';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiService: ApiService) {}

  getPopularMovies() {
    return getPopularMoviesMock();
  }

  getTopRatedMovies() {
    return getTopRatedMoviesMock();
  }

  getMovieDetails() {
    return getMovieDetailsMock();
  }

  getMovieCast() {
    return getMovieCastMock();
  }

  getMovieCrew() {
    return getMovieCrewMock();
  }

  getSimilarMovies() {
    return getPopularMoviesMock();
  }

  getMoviesBySearch() {
    return getPopularMoviesMock();
  }
}
