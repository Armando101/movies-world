import { Injectable } from '@angular/core';
import { ApiService } from '@olimpo/frontend/onboarding/utilities/api';
import { ICast, ICredits, IMovie } from '../interfaces';
import { getMovieCrewMock, getPopularMoviesMock } from './mocks/movies.mock';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiService: ApiService) {}

  getPopularMovies() {
    return this.apiService.get<Array<IMovie>>(
      'movie/popular',
      {
        params: { page: '1' },
      },
      { pipe: 'results' }
    );
  }

  getTopRatedMovies() {
    return this.apiService.get<Array<IMovie>>(
      'movie/top_rated',
      {
        params: { page: '1' },
      },
      { pipe: 'results' }
    );
  }

  getMovieDetails(id: string) {
    return this.apiService.get<IMovie>(`movie/${id}`, { params: {} });
  }

  getCredits(id: string) {
    return this.apiService.get<ICredits>(`movie/${id}/credits`, {
      params: {},
    });
  }

  getSimilarMovies() {
    return getPopularMoviesMock();
  }

  getMoviesBySearch(value: string) {
    return getPopularMoviesMock();
  }
}
