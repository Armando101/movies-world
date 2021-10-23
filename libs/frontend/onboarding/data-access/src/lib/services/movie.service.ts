import { Injectable } from '@angular/core';
import { ApiService } from '@olimpo/frontend/onboarding/utilities/api';
import { IMovie } from '../interfaces';
import {
  getMovieCastMock,
  getMovieCrewMock,
  getMovieDetailsMock,
  getPopularMoviesMock,
} from './mocks/movies.mock';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiService: ApiService) {}

  getPopularMovies() {
    return this.apiService.get<Array<IMovie>>('movie/popular', {
      params: { page: '1' },
    });
  }

  getTopRatedMovies() {
    return this.apiService.get<Array<IMovie>>('movie/top_rated', {
      params: { page: '1' },
    });
  }

  getMovieDetails(id: string) {
    return this.apiService.get<IMovie>(
      `movie/${id}`,
      { params: {} },
      { pipes: false }
    );
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

  getMoviesBySearch(value: string) {
    return getPopularMoviesMock();
  }
}
